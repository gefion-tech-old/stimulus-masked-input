class MaskedInputController extends Stimulus.Controller {
	static targets = ['field'];  
  
  static values = {
  	mask: String,
  }
  
  connect() {
  	$(this.fieldTarget).mask(this.maskValue)
  }
  
}

(function() {
    let application;

    if (window.stimulusApplication) {
        application = window.stimulusApplication
    } else {
        application = Stimulus.Application.start()
    }

    application.register('masked-input', MaskedInputController)

    window.stimulusApplication = application
})()
