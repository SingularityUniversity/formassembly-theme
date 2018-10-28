const BUILDER_VERSION = '5.0.0';


class TestForm extends Form {
    constructor() {
        super();
        this.setBuilderVersion(BUILDER_VERSION)
            .setDefaultLabelPlacement('labelsAbove')
            .setDefaultHintPlacement('hintsTooltip');
    }

    /* Patch Form API 5.0.0  - to be added on app.formassembly.com */
    setLanguageDirection(dir) {
        return this.xml.setAttribute('languagedirection',dir);
    }

    getLanguageDirection() {
        return this.xml.getAttribute('languagedirection') || 'ltr';
    }

    /* Utility functions to generate random text */
    loremIpsum(min= 4, max = null) {
        const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                       Cursus sit amet dictum sit amet justo donec enim diam. 
                       Cras tincidunt lobortis feugiat vivamus. 
                       Neque aliquam vestibulum morbi blandit cursus risus. 
                       Et tortor at risus viverra. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. 
                       Nunc sed blandit libero volutpat sed. 
                       Ultrices in iaculis nunc sed augue. Lacus vel facilisis volutpat est velit egestas dui. 
                       Neque aliquam vestibulum morbi blandit cursus risus. 
                       Vulputate eu scelerisque felis imperdiet proin fermentum. 
                       Leo urna molestie at elementum eu. 
                       Amet nisl suscipit adipiscing bibendum est ultricies integer. 
                       Nulla posuere sollicitudin aliquam ultrices sagittis orci a. 
                       Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. 
                       Pellentesque habitant morbi tristique senectus et netus et. 
                       Arcu bibendum at varius vel pharetra vel turpis. 
                       Nam at lectus urna duis convallis convallis tellus. 
                       Pharetra massa massa ultricies mi. Ullamcorper malesuada proin libero nunc consequat`;

        if(max===null) max = min;
        const count = Math.floor(Math.random() * (max + 1 - min)) + min;
        return TestForm.shuffle(lorem.trim().replace(/\s+/g,' ').split('.')).join('.')
            .split(' ').slice(0,count + 1).join(' ');
    }

    hebrewIpsum(min= 4, max = null) {
        let lorem = `תנך לראות משפטים גיאוגרפיה גם, שימושי ויקימדיה סדר את, מה המשפט צרפתית קצרמרים זכר. ב קסאם ספרדית מדע, טיפול מבוקשים אגרונומיה של מלא, כיצד מתמטיקה מתן דת. מה הבהרה בחירות רבה, של מוגש בארגז שימושי מלא. כלל מה לתרום מרצועת אירועים.
מתן דת רפואה תיאטרון. סדר של בהשחתה העריכהגירסאות. נוסחאות ארכיאולוגיה מדע אל. אם כלשהו אירועים המקושרים רבה, מדע אל אנגלית שינויים מונחונים. תרבות מרצועת מדע את. שתי דת קהילה ולחבר אקטואליה.
ב בדפים ואלקטרוניקה ויש, גם פולנית צרפתית תקשורת אתה. כדי ב רקטות הנדסת, ביולי משחקים ביולוגיה או כדי. לחבר קבלו ובמתן אם שתי, ארץ מה זקוק ליצירתה. חפש מפתח ביוני לרפובליקה על, ב כלל ובמתן התפתחות אדריכלות. מה עוד עמוד לחיבור פסיכולוגיה. דת שתי צילום טבלאות אתנולוגיה, רביעי קלאסיים רב־לשוני מה לוח.
או המקושרים אקטואליה אחר, בקר סרבול פולנית קודמות גם, על חפש לציין רוסית המלצת. קרן על שינויים משופרות לרפובליקה, את מדע למחיקה מדריכים, אחד של ולחבר הבאים אגרונומיה. מושגי בשפות טכנולוגיה ארץ של, מיזמי לעריכה שיתופית מה זאת, לתרום לחיבור של סדר. החלל לימודים ויקיפדיה את ויש, שונה סרבול בה שכל. קבלו וכמקובל שער על, אל לערך התוכן בקר. אל לחבר אגרונומיה בקר, סרבול ניהול אקראי או צ'ט, מה סדר הטבע לחבר משפטית.
אנא את פנאי בקרבת נבחרים, ליום קישורים היסטוריה אחד ב. ב אודות החופשית ויקימדיה היא, בדף על הגולשות למתחילים תאולוגיה, סרבול מבוקשים רבה גם. או זאת באגים המדינה היסטוריה, מיוחדים המקושרים מה עזה. שנתי בגרסה אל מדע. על מדע בהבנה בקלות קישורים, של אחרים חבריכם עזה.
אל יוני סטטיסטיקה מתן, אנא או לציין אדריכלות לרפובליקה, ב לשון בשפה אקראי בקר. המקובל משופרות מדע של. אם עזה בישול לעברית, של שתי אינו לימודים, הבהרה תבניות של בקר. ב שער ננקטת לחיבור, עוד ב עסקים יוצרים לימודים, זאת נפלו שאלות יוצרים או.
או ויש מיזם חשמל העזרה, דת למנוע ספינות משחקים עזה, אל זקוק ביולי פוליטיקה צ'ט. את שכל ריקוד רקטות, של מלא בקלות ממונרכיה. שפות איטליה על עוד. זאת ראשי החברה גם.
או אחרים המקובל וספציפיים אחד, שמו בידור שימושיים של, שמו הארץ אנתרופולוגיה דת. גם תחבורה וספציפיים מתן. הספרות טכניים אל עוד, ב יוני ארכיאולוגיה זכר. היא ליום להפוך אם, שמו בה לחבר פולנית אנתרופולוגיה, מיותר משפטית שימושיים אחד של.
מדעי לחיבור חרטומים זכר דת, שכל משפטים והנדסה לערכים או. גם כיצד וספציפיים שתי, עוד ב יוני אודות קרימינולוגיה, את כלל כיצד ולחבר אירועים. מתן היום הגרפים והגולשים של, למנוע אחרים והגולשים דת עזה. אנא פולנית לעברית ממונרכיה או. של ריקוד עקרונות צעד, בה מתן ריקוד ביוטכנולוגיה.
את מדע שימושי אינטרנט. או שמו עמוד זכויות. ב פיסול לעריכת ויקימדיה שכל, חפש אל ננקטת חבריכם שיתופית. לוח לציין התוכן בקרבת אל, מתן אם כימיה חופשית אירועים, בה בקר כלים נוסחאות פוליטיקה. אל היא עמוד החברה יוצרים, על ערכים לערוך קודמות בדף.`;

        if(max===null) max = min;
        const count = Math.floor(Math.random() * (max + 1 - min)) + min;
        return TestForm.shuffle(lorem.trim().replace(/\s+/g,' ').split('.')).join('.')
            .split(' ').slice(0,count + 1).join(' ');
    }

    randomColors(count) {
        const colors = ['Blood orange', 'Ultramarine blue', 'Pink',
                        'Cyan cornflower blue', 'Caribbean green', 'Beige',
                        'Vivid tangerine','Raspberry pink', 'Rich lavender', 'Ultramarine',
                        'Zebra White','Jungle green', 'Fluorescent yellow', 'Deep carrot orange'];
        return TestForm.shuffle(colors).slice(0,count);
    }

    static shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
}