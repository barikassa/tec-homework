// 1.	צור קומפוננטה  עם כותרת "hello".
const domElement = document.getElementById("div");

function PrintHello() {
  return "hello";
}

//! 2!!.	צור קומפוננטה שמציגה אובייקט רכב על המסך.

function ShowObj() {
  const obj = { name: "dani", year: 2012 };
  return (
    <h1>
      {obj.name} {obj.year}
    </h1>
  );
}
// ----------------------------------------------------

// 3/4.	צור קומפוננטה שמחזירה את השם שלך.

function GetMyName() {
  const bari = "bari kassa";
  return <h1> {bari}</h1>;
}

// 4.	הפעל את הקומפונטה משאלה 3 בתוך הקומפוננטה משאלה 1
function GetTwofuncTogether() {
  const bari = "bari kassa";
  return (
    <h1>
      <PrintHello /> {bari}
    </h1>
  );
}

// 5.	צור קומפוננטות של header, main, footer והצג אותם על המסך.

const headerHtml = "news";
const headerHtml1 = "about";
const headerHtml2 = "form";

function ShowOnHeader() {
  return (
    <header>
      <h1>{headerHtml}</h1>
      <h1>{headerHtml1}</h1>
      <h1>{headerHtml2}</h1>
    </header>
  );
}

const mainHtml = "the story of ...";
const mainHtml1 = "the news that changed the world";
const mainHtml2 =
  "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ";

function ShowOnMain() {
  return (
    <main>
      <p>{mainHtml}</p>,<p>{mainHtml1}</p>,<p>{mainHtml2}</p>
    </main>
  );
}

const footerHtml = "author";
const footerHtml1 = "writer";
const footerHtml2 = "find Us";

function ShowOnFooter() {
  return (
    <footer>
      <li>{footerHtml}</li>
      <li>{footerHtml1}</li>
      <li>{footerHtml2}</li>
    </footer>
  );
}

// 6.	צור קומפוננטה שמקבלת שם ומציגה על המסך "hello" עם השם.
// a.	חזור על זה עם 10 שמות שונים.

function Hello() {
  return "hello";
}
function ShowOnDom(props) {
  return (
    <h1>
      <Hello /> {props.name}
    </h1>
  );
}

// 7.	צור קומפוננטה שמקבלת שם וגיל ומציגה על המסך את השם והגיל.

function PrintTenTimes() {}

function ShowNameAndAge(props) {
  return (
    <h1>
      {props.name}
      {props.age}
    </h1>
  );
}

// 8.	צור קומפוננטה שמקבלת לינק ומחזירה תמונה עם אותו הלינק כ- src.
const link1 = (
  <img src="https://cdn.pixabay.com/photo/2021/11/13/19/27/architecture-6792169_960_720.jpg" />
);
const link2 = (
  <img src="https://cdn.pixabay.com/photo/2021/10/05/14/32/ocean-6682870__340.jpg" />
);
const link3 = (
  <img src="https://cdn.pixabay.com/photo/2020/10/20/20/41/horse-5671492__340.jpg" />
);
function GetLink(props) {
  return <h1>{props.link}</h1>;
}

// 9.	צור קומפוננטה שמקבלת לינק ומחזירה וידאו עם אותו הלינק כ-
const VD = (
  <video
    controls
    src="https://player.vimeo.com/external/587646749.hd.mp4?s=cd8928bab78792f5dd05e680e2cc94b20b6e2f9d&profile_id=174"
  ></video>
);
function ShowVideo(props) {
  return <h1>{props.video}</h1>;
}

// 10.	הסבר מהו props.
// React Props are like function arguments in JavaScript and attributes in HTML.
// To send props into a component, use the same syntax as HTML attributes:

ReactDOM.render(
  <div>
    <ShowVideo video={VD} />
    <ShowVideo video={VD} />
    <ShowVideo video={VD} />

    <GetLink link={link1} />
    <GetLink link={link2} />
    <GetLink link={link3} />

    <ShowNameAndAge name="kabi" age="22" />
    <ShowNameAndAge name="dada" age="45" />
    <ShowNameAndAge name="nana" age="82" />
    <ShowNameAndAge name="shasha" age="92" />
    <ShowNameAndAge name="boba" age="12" />

    <ShowOnDom name="dani" />
    <ShowOnDom name="max" />
    <ShowOnDom name="nathan" />
    <ShowOnDom name="sheksper" />
    <ShowOnDom name="colega" />
    <ShowOnDom name="django" />
    <ShowOnDom name="marvles" />
    <ShowOnDom name="campri" />
    <ShowOnDom name="logan" />
    <ShowOnDom name="shendi" />

    <ShowOnHeader />
    <ShowOnMain />
    <ShowOnFooter />

    <ShowObj />
    <h1>
      <PrintHello />
    </h1>
    <GetMyName />
    <GetTwofuncTogether />
  </div>,
  domElement
);
