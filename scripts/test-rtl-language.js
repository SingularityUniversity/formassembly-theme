class PreviewForm extends TestForm {
    constructor() {
        super();
        this.setId('tfa_400'); // prevent ID collision with other forms on the same preview page.
        this.setLanguageDirection('rtl');
        this.setTitle("Theme Dev Kit - <em>Right-to-Left Language</em>");
        this.append(new HTML().setContent('<h4>Labels above their inputs</h4>'));
        let section = this.append(new Section().setType('div').setLayout('inline'));
        section.append(new Field())
            .setLabel(this.hebrewIpsum(3,4))
            .setLabelLayout('labelsAbove')
            .setType('textinput')
            .setInputSize('10em');
        section.append(new Field())
            .setLabel(this.hebrewIpsum(3,4))
            .setLabelLayout('labelsAbove')
            .setType('textarea')
            .setInputSize('10em');
        section.append(new Field())
            .setLabel(this.hebrewIpsum(3,4))
            .setLabelLayout('labelsAbove')
            .setType('radio')
            .addChoices([this.hebrewIpsum(2,3),this.hebrewIpsum(2,3), this.hebrewIpsum(2,3)]);

        this.append(new HTML().setContent('<h4>Labels below their inputs</h4>'));
        section = this.append(new Section().setType('div').setLayout('inline'));
        section.append(new Field())
            .setLabel(this.hebrewIpsum(3,4))
            .setLabelLayout('labelsBelow')
            .setType('textinput')
            .setInputSize('14em');
        section.append(new Field())
            .setLabel(this.hebrewIpsum(3,4))
            .setLabelLayout('labelsBelow')
            .setType('textarea')
            .setInputSize('14em');

        this.append(new HTML().setContent('<h4>Labels to the side - left aligned.</h4>'));
        section = this.append(new Section().setType('div'));
        section.append(new Field())
            .setLabel(this.hebrewIpsum(3,4))
            .setLabelLayout('labelsLeftAligned')
            .setType('textinput')
            .setInputSize('14em');
        section.append(new Field())
            .setLabel(this.hebrewIpsum(3,4))
            .setLabelLayout('labelsLeftAligned')
            .setType('textarea')
            .setInputSize('14em');
        section.append(new Field())
            .setLabel(this.hebrewIpsum(3,4))
            .setLabelLayout('labelsLeftAligned')
            .setType('radio')
            .addChoices([this.hebrewIpsum(2,3),this.hebrewIpsum(2,3), this.hebrewIpsum(2,3)]);

        this.append(new HTML().setContent('<h4>Labels to the side - right aligned.</h4>'));
        section = this.append(new Section().setType('div'));
        section.append(new Field())
            .setLabel(this.hebrewIpsum(3,4))
            .setLabelLayout('labelsRightAligned')
            .setType('textinput')
            .setInputSize('14em');
        section.append(new Field())
            .setLabel(this.hebrewIpsum(3,4))
            .setLabelLayout('labelsRightAligned')
            .setType('textarea')
            .setInputSize('14em');
        section.append(new Field())
            .setLabel(this.hebrewIpsum(3,4))
            .setLabelLayout('labelsRightAligned')
            .setType('radio')
            .addChoices( [this.hebrewIpsum(2,3),this.hebrewIpsum(2,3), this.hebrewIpsum(2,3)] );
    }
}