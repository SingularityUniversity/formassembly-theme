
class PreviewForm extends TestForm {
    constructor() {
        super();
        this.setId('tfa_300'); // prevent ID collision with other forms on the same preview page.
        this.setTitle("Theme Dev Kit - <em>Test Form 3 - Multi-Page</em>");
        this.enablePageNavigation();

        let page1 = this.append(new Section().setType('page'))
            .setLabel('First Page');

        page1.append(new Field())
            .setLabel(this.loremIpsum(4,6));

        let page2 = this.append(new Section().setType('page'))
            .setLabel('Second Page');

        page2.append(new Field())
            .setLabel(this.loremIpsum(4,6));

        let page3 = this.append(new Section().setType('page'))
            .setLabel('Third Page');

        page3.append(new Field())
            .setLabel(this.loremIpsum(4,6));

    }
}