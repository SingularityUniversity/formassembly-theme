class PreviewForm extends TestForm {
    constructor() {
        super();
        this.setId('tfa_500'); // prevent ID collision with other forms on the same preview page.

        this.setTitle("Theme Dev Kit - <em>Tables</em>");
        let section = this.append(new Section().setType('div'));
        const randomColors = this.randomColors(4);
        section.append(new Field())
            .setLabel(this.loremIpsum(3,4))
            .setType('radio')
            .setChoiceLayout('matrix')
            .addChoices(randomColors);

        section.append(new Field())
            .setLabel(this.loremIpsum(3,4))
            .setType('radio')
            .setChoiceLayout('matrix')
            .addChoices(randomColors);

        section.append(new Field())
            .setLabel(this.loremIpsum(3,4))
            .setType('radio')
            .setChoiceLayout('matrix')
            .addChoices(randomColors);

        section = this.append(new Section().setLayout('grid'));
        section.setLabel('1st Row - ' + this.loremIpsum(2,3));
        section.append(new Field())
            .setInputSize('4em')
            .setLabel('First Column');
        section.append(new Field())
            .setInputSize('9em')
            .setLabel('Second Column');
        section.append(new Field())
            .setInputSize('6em')
            .setLabel('Third Column');

        section = this.append(new Section().setLayout('grid'));
        section.setLabel('2nd Row - ' + this.loremIpsum(2,3));
        section.append(new Field())
            .setInputSize('4em')
            .setLabel('First Column');
        section.append(new Field())
            .setInputSize('9em')
            .setLabel('Second Column');
        section.append(new Field())
            .setInputSize('6em')
            .setLabel('Third Column');

        section = this.append(new Section().setLayout('grid'));
        section.setLabel('3rd Row - ' + this.loremIpsum(2,3));
        section.append(new Field())
            .setInputSize('4em')
            .setLabel('First Column');
        section.append(new Field())
            .setInputSize('9em')
            .setLabel('Second Column');
        section.append(new Field())
            .setInputSize('6em')
            .setLabel('Third Column');

    }
}