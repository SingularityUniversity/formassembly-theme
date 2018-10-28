class PreviewForm extends TestForm {
    constructor() {
        super();
        this.setId('tfa_600'); // prevent ID collision with other forms on the same preview page.
        this.setTitle("Theme Dev Kit - <em>Field Decorators</em>");

        this.append(new HTML().setContent('<h4>Field Tooltips (<b>focus to show</b>)</h4>'));
        let section = this.append(new Section().setType('div').setLayout('inline'));
        section.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setInputSize('12em')
            .setHint(this.loremIpsum(5,10))
            .setHintLayout('hintsTooltip');

        section.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setInputSize('12em')
            .setType('textarea')
            .setHint(this.loremIpsum(5,10))
            .setHintLayout('hintsTooltip');

        this.append(new HTML().setContent('<h4>Field Hints (<b>focus to see active state</b>)</h4>'));
        section = this.append(new Section().setType('div').setLayout('inline'));
        section.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setInputSize('10em')
            .setHint(this.loremIpsum(5,10))
            .setHintLayout('hintsBelow');

        section.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setType('textarea')
            .setInputSize('10em')
            .setHint(this.loremIpsum(5,10))
            .setHintLayout('hintsBelow');

        section = this.append(new Section().setType('div').setLayout('inline'));
        section.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setInputSize('10em')
            .setHint(this.loremIpsum(5,10))
            .setHintLayout('hintsSide');

        section.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setType('textarea')
            .setInputSize('10em')
            .setHint(this.loremIpsum(5,10))
            .setHintLayout('hintsSide');

        this.append(new HTML().setContent('<h4>Text delimiters</h4>'));
        this.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setInputSize('10em')
            .setBeforeDelimiter('$')
            .setAfterDelimiter('.00');

        this.append(new HTML().setContent('<h4>Text Counters (<b>focus to see active state</b>)</h4>'));
        this.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setInputSize('20em')
            .setInputMaxLength('20')
            .setInputMaxLengthUnit('characters');

        this.append( new Field() )
            .setType('textarea')
            .setLabel(this.loremIpsum(3,5))
            .setInputSize('20em')
            .setInputMaxLength('20')
            .setInputMaxLengthUnit('characters');

        this.append(new HTML().setContent('<h4>Input with Calendar (<b>focus to show</b>)</h4>'));

        this.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setValidation('validate-datecal');

    }
}