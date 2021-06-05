class MaskedInputController extends Stimulus.Controller {
	static targets = ['field'];  
  
  static values = {
  	mask: String,
    autoclear: Boolean,
    placeholder: String
  }
  
  connect() {
  	if(this.placeholderValue === ""){
    	this.placeholderValue = "_"
    }
    
  	$(this.fieldTarget).mask(this.maskValue, { autoclear: this.autoclearValue, placeholder: this.placeholderValue })
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
