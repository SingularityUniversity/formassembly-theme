
class PreviewForm extends TestForm {
    constructor() {
        super();
        this.setId('tfa_700'); // prevent ID collision with other forms on the same preview page.
        this.setTitle("Theme Dev Kit - <em>Fieldsets</em>");

        let section1 = this.append(new Section()).setType('fieldset').setLabel('Fieldset 1 Heading');

        section1.append(new Field())
            .setLabel(this.loremIpsum(6,8))
            .setType('textinput');

        let section2 = this.append(new Section()).setType('fieldset').setLabel('Fieldset 2 Heading');

        section2.append(new HTML())
            .setContent(this.loremIpsum(8,12));

        let section3 = section2.append(new Section()).setType('fieldset').setLabel('Fieldset 3 Heading - nested');
        section3.append(new Field())
            .setLabel(this.loremIpsum(6,8))
            .setType('textinput');

        let section4 = this.append(new Section()).setType('fieldset').setLabel('Fieldset 4 Heading (Highlighted)');
        section4.setStyle('highlighted');
        section4.append(new Field())
            .setLabel(this.loremIpsum(6,8))
            .setType('textinput');

        let section5 = this.append(new Section()).setType('div').setLabel('\'Group\' Section Heading');
        section5.append(new Field())
            .setLabel(this.loremIpsum(6,8))
            .setType('textinput');
    }
}