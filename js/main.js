const links = [
    {
      label: "Week 1 notes",
      url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "week5/index.html"
    },
    {
        label: "Week 6 TODO Assignment",
        url: "week6/index.html"
    },
    {
        label: "Week 7 notes",
        url: "week7/index.html"
    },
    {
        label: "Week 8 notes",
        url: "week8/index.html"
    },
    {
        label: "Week 9 notes",
        url: "week9/index.html"
    },
    {
        label: "Week 10 notes",
        url: "week10/index.html"
    },
    {
        label: "Final Project",
        url: "FINAL PROJECT/index.html"
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
