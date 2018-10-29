
class PreviewForm extends TestForm {
    constructor() {
        super();
        this.setId('tfa_1000'); // prevent ID collision with other forms on the same preview page.
        this.setTitle("Theme Dev Kit - <em>Conditional Content</em>");

        this.append(new HTML().setContent('<h4>Conditional Field</h4>'));
        let field = this.append(new Field())
            .setType('checkbox');
        let choice = field.addChoice('check to show conditional field');

        this.append(new Field())
            .setLabel(this.loremIpsum(3,6))
            .setType('textinput')
            .setCondition("`#"+choice.getId()+"`");

        this.append(new HTML().setContent('<h4>Conditional Section</h4>'));
        field = this.append(new Field())
            .setType('checkbox');
        choice = field.addChoice('check to show conditional section');

        let section = this.append(new Section())
            .setType('fieldset')
            .setLabel(this.loremIpsum(3,6))
            .setCondition("`#"+choice.getId()+"`");

        section.append(new HTML().setContent(this.loremIpsum(12,16)));
        section.append(new HTML().setContent(this.loremIpsum(12,16)));
        section.append(new HTML().setContent(this.loremIpsum(12,16)));
    }
}