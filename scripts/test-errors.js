
class PreviewForm extends TestForm {
    constructor() {
        super();
        this.setId('tfa_800'); // prevent ID collision with other forms on the same preview page.
        this.setTitle("Theme Dev Kit - <em>Validation Errors</em>");

        this.append(new HTML().setContent('<h4>Required Fields</h4>'));
        this.append(new Field())
            .setLabel(this.loremIpsum(3,6))
            .setAsRequired()
            .setType('textinput');

        /* trigger the validation error, so it can be visible */
        this.append(new HTML().setContent(`
            <script type='text/javascript'>
                (function() {
                    let _applyAll = wFORMS.behaviors.onApplyAll;
                    wFORMS.behaviors.onApplyAll = function(f) {
                        if(f.id==='tfa_800') {
                            try {
                                wFORMS.getBehaviorInstance(f,'validation').run(null,f);
                            } catch(e) {}                                                         
                        }
                        if(typeof _applyAll === 'function') {
                            _applyAll(f);
                        }
                    }        
                })();
            </script>`));
    }
}