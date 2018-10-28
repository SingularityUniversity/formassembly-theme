
class PreviewForm extends TestForm {
    constructor() {
        super();
        this.setId('tfa_100'); // prevent ID collision with other forms on the same preview page.
        this.setTitle("Theme Dev Kit - <em>Field Types</em>");

        this.append(new Field())
            .setLabel('A field for a short answer')
            .setType('textinput');
        this.append(new Field())
            .setLabel('A field for a long answer, with a long label.')
            .setType('textarea');
        this.append(new Field())
            .setLabel('A select field')
            .setType('select1')
            .addChoices(this.randomColors(3));
        this.append(new Field())
            .setLabel('A multi-select field')
            .setType('select')
            .addChoices(this.randomColors(3));
        this.append(new Field())
            .setLabel('A radio group')
            .setType('radio')
            .addChoices(this.randomColors(3));
        this.append(new Field())
            .setLabel('A checkbox group')
            .setType('checkbox')
            .setChoiceLayout('columns3')
            .addChoices(this.randomColors(6));
        this.append(new Field())
            .setLabel('A file upload')
            .setType('fileupload');
        this.append(new Field())
            .setLabel('A password field')
            .setType('secret');
    }
}