const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week4 notes",
        url: "week4/index.html"
    },
    {
        label: "Week5 notes",
        url: "week5/index.html"
    },
    {
        label: "Week6 notes",
        url: "week6/index.html"
    }
    
  ]

const list = document.querySelector('ol');

for (const week of links){
    //creating the items of the list
    let item = document.createElement("li");
    //each item should have a link
    let link = document.createElement("a");
    //Adding the label to the link
    link.textContent = week.label;
    //setting the href attribute for each week link
    link.setAttribute("href", week.url);

    //appending the link into the week item
    item.appendChild(link);

    //appending the week into the list of weeks(portfolio)
    list.appendChild(item);
}