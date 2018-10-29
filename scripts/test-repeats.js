
class PreviewForm extends TestForm {
    constructor() {
        super();
        this.setId('tfa_900'); // prevent ID collision with other forms on the same preview page.
        this.setTitle("Theme Dev Kit - <em>Repeatable Content</em>");

        this.append(new HTML().setContent('<h4>Repeatable Field</h4>'));
        this.append(new Field())
            .setLabel(this.loremIpsum(3,6))
            .setType('textinput')
            .setAsRepeatable();

        this.append(new HTML().setContent('<h4>Repeatable Section</h4>'));
        let section = this.append(new Section())
            .setType('fieldset')
            .setLabel(this.loremIpsum(3,6))
            .setAsRepeatable();
        section.append(new Field())
            .setLabel(this.loremIpsum(5));

        this.append(new HTML().setContent(`
            <script type='text/javascript'>
                (function() {
                    let _applyAll = wFORMS.behaviors.onApplyAll;
                    wFORMS.behaviors.onApplyAll = function(f) {
                        if(f.id==='tfa_900') {
                            let s = document.getElementById('${section.getId()}');
                            try {
                                wFORMS.getBehaviorInstance(s,'repeat').run(null,s);
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