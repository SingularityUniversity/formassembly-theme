class PreviewForm extends TestForm {
    constructor() {
        super();
        this.setId('tfa_600'); // prevent ID collision with other forms on the same preview page.
        this.setTitle("Theme Dev Kit - <em>Field Decorators</em>");

        this.append(new HTML().setContent('<h4>Input Placeholder</h4>'));

        this.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setInputSize('12em')
            .setPlaceholder(this.loremIpsum(3,4));

        this.append(new HTML().setContent('<h4>Input Format Guide</h4>'));

        this.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setInputSize('12em')
            .setValue("2")
            .setAutoformat("###.##");

        this.append(new HTML().setContent('<h4>Field Tooltips (<em>focus to show</em>)</h4>'));
        let section = this.append(new Section().setType('div').setLayout('inline'));
        section.append( new Field() )
            .setLabel(this.loremIpsum(2,3))
            .setInputSize('10em')
            .setHint(
                this.loremIpsum(3,4)
                + " <a href='#' target='_blank'>"+this.loremIpsum(4)+"</a> "
                + this.loremIpsum(2,4))
            .setHintLayout('hintsTooltip');

        section.append( new Field() )
            .setLabel(this.loremIpsum(2,3))
            .setType('select1')
            .addChoices(this.randomColors(4))
            .setHint(
                this.loremIpsum(2,4)
                + " <b>"+this.loremIpsum(4)+"</b> "
                + this.loremIpsum(2,4))
            .setHintLayout('hintsTooltip');

        this.append(new HTML().setContent('<h4>Field Hints (<em>focus to see active state</em>)</h4>'));
        section = this.append(new Section().setType('div').setLayout('inline'));
        section.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setInputSize('12em')
            .setHint(this.loremIpsum(2,4)
                    + " <a href='#' target='_blank'>"+this.loremIpsum(4)+"</a> "
                    + this.loremIpsum(2,4))
            .setHintLayout('hintsBelow');

        section.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setType('textarea')
            .setInputSize('12em')
            .setHint(this.loremIpsum(2,4)
                + " <b>"+this.loremIpsum(2)+"</b> "
                + this.loremIpsum(2,4))
            .setHintLayout('hintsBelow');

        section = this.append(new Section().setType('div'));
        section.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setInputSize('12em')
            .setHint(this.loremIpsum(5,10))
            .setHintLayout('hintsSide');

        section.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setType('textarea')
            .setInputSize('12em')
            .setHint(this.loremIpsum(5,10))
            .setHintLayout('hintsSide');

        this.append(new HTML().setContent('<h4>Input delimiters</h4>'));
        this.append( new Field() )
            .setLabel(this.loremIpsum(3,5))
            .setInputSize('5em')
            .setBeforeDelimiter('$')
            .setAfterDelimiter('.00');

        this.append(new HTML().setContent('<h4>Text Counters (<em>focus to see active state</em>)</h4>'));
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

        this.append(new HTML().setContent('<h4>Input with Calendar</h4>'));

        section = this.append(new Section())
            .setType('div')
            .setLayout('column')
            .setColumnCount(2);

        section.append( new Field() )
            .setInputSize('10em')
            .setLabel('Pop-up calendar <em>(focus to show)</em>')
            .setValidation('validate-datecal');

        section.append(new HTML().setContent('<p>Calendar Preview:</p><div class="auto-kal" data-kal="selected: \'2/5/2018\'"></div>'));

    }
}