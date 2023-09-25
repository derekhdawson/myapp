import ExpoModulesCore

import Beethoven
import Pitchy
import Hue

public class MyappModule: Module {
    
    lazy var pitchEngine: PitchEngine = { [weak self] in
      let config = Config(estimationStrategy: .yin)
      let pitchEngine = PitchEngine(config: config, delegate: self)
      pitchEngine.levelThreshold = -30.0
      return pitchEngine
    }()
    
    
  public func definition() -> ModuleDefinition {
    Name("Myapp")

    Events("onChange")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
        pitchEngine.start()
    }

    AsyncFunction("setValueAsync") { (value: String) in
      // Send an event to JavaScript.
      self.sendEvent("onChange", [
        "value": value
      ])
    }
  }
}

extension MyappModule: PitchEngineDelegate {
  public func pitchEngine(_ pitchEngine: PitchEngine, didReceivePitch pitch: Pitch) {
      
      let offsetPercentage = pitch.closestOffset.percentage
      let absOffsetPercentage = abs(offsetPercentage)

      print("pitch : \(pitch.note.string) - percentage : \(offsetPercentage)")

      guard absOffsetPercentage > 1.0 else {
        return
      }

      let prefix = offsetPercentage > 0 ? "+" : "-"
      

      var noteStr = "\(prefix)" + String(format:"%.2f", absOffsetPercentage) + "%"
      self.sendEvent(noteStr)
  }

  public func pitchEngine(_ pitchEngine: PitchEngine, didReceiveError error: Error) {
    
  }

  public func pitchEngineWentBelowLevelThreshold(_ pitchEngine: PitchEngine) {
    
  }
}
