
class PreviewForm extends TestForm {
    constructor() {
        super();
        this.setId('tfa_100'); // prevent ID collision with other forms on the same preview page.
        this.setTitle("Theme Dev Kit - <em>Field Types</em>");

        this.append(new Field())
            .setLabel('A field for a short answer')
            .setType('textinput')
            .setValue('Lorem ipsum...');
        this.append(new Field())
            .setLabel('A field for a long answer, with a long label.')
            .setType('textarea')
            .setValue(this.loremIpsum(12,15));
        this.append(new Field())
            .setLabel('A select field (with 3 options)')
            .setType('select1')
            .addChoices(this.randomColors(3));
        let field = this.append(new Field())
            .setLabel('A multi-select field (with 4 options)')
            .setType('select')
            .addChoices(this.randomColors(4));
        field.findChoiceByIndex(2).setAsDefault();
        field.findChoiceByIndex(4).setAsDefault();

        field = this.append(new Field())
            .setLabel('A radio group')
            .setType('radio')
            .addChoices(this.randomColors(3));
        field.findChoiceByIndex(2).setAsDefault();

        field = this.append(new Field())
            .setLabel('A checkbox group')
            .setType('checkbox')
            .setChoiceLayout('columns3')
            .addChoices(this.randomColors(6));

        field.findChoiceByIndex(2).setAsDefault();
        field.findChoiceByIndex(4).setAsDefault();

        this.append(new Field())
            .setLabel('A file upload')
            .setType('fileupload');

        this.append(new Field())
            .setLabel('A password field')
            .setType('secret')
            .setValue('password');

        this.append(new Field())
            .setLabel('A read-only field')
            .setType('textinput')
            .setInputSize('12em')
            .setValue(this.loremIpsum(4,6))
            .setCalculationFormula(' ');

        this.append(new Field())
            .setLabel('An Auto-suggest field (<em>start typing to see suggestions</em>)')
            .setType('textinput')
            .setAutosuggest('csv', "336f9e28-c10a-46be-ab5d-8889c1b9c9bc");

        // Patch - currently not exposed through Form API
        this.xml.setAttribute('jqueryurl', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js');
        this.xml.setAttribute('typeaheadurl','https://app.formassembly.com/js/typeahead/v0.11.1/typeahead.bundle.js');
        this.xml.setAttribute('fontawesomeurl','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
        this.xml.setAttribute('typeaheadqueryurl','https://typeahead.formassembly.com');
        this.xml.setAttribute('typeaheadqueryaction','query.php');
    }
}