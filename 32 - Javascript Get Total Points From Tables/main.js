function getData() {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let myData = JSON.parse(this.responseText);

      function calcTotalPoints() {
        // Our Variables
        let allArr = [];
        let allObj = [];
        let test = [];

        // Create Our Array
        Object.entries(myData).forEach((el) => {
          // Create Tables
          let table = document.createElement("table");
          let caption = document.createElement("caption");
          let month = document.createTextNode(el[0]);
          document.getElementById("tabel-container").appendChild(table);
          table.appendChild(caption);
          caption.appendChild(month);

          Object.entries(el[1]).forEach((el) => {
            // Create Tables Rows
            let tr = document.createElement("tr");
            let tdName = document.createElement("td");
            let tdPoints = document.createElement("td");
            let name = document.createTextNode(el[1].name);
            let points = document.createTextNode(el[1].points);
            table.appendChild(tr);
            tr.appendChild(tdName);
            tr.appendChild(tdPoints);
            tdName.appendChild(name);
            tdPoints.appendChild(points);
            allArr.push(el);
          });
        });

        // Create Our Objects
        allArr.forEach((el) => {
          allObj.push(el[1]);
        });

        // Merge Our Objects and Sum Points
        let totalPoints = Object.values(
          allObj.reduce((acc, { name, points }) => {
            acc[name] = { name, points: (acc[name] ? acc[name].points : 0) + points };
            return acc;
          }, {})
        );

        // Reordering
        totalPoints.sort(function (a, b) {
          return b.points - a.points;
        });

        // Create Total Points Table
        let totalPointsTable = document.createElement("table");
        let totalPointsCaption = document.createElement("caption");
        let totalPointsTitle = document.createTextNode("Total Points");

        // Create Total Points Table Rows
        totalPoints.forEach((el) => {
          let tr = document.createElement("tr");
          let tdName = document.createElement("td");
          let tdPoints = document.createElement("td");
          let name = document.createTextNode(el.name);
          let points = document.createTextNode(el.points);
          document.getElementById("points-container").appendChild(totalPointsTable);
          totalPointsTable.appendChild(totalPointsCaption);
          totalPointsCaption.appendChild(totalPointsTitle);
          totalPointsTable.appendChild(tr);
          tr.appendChild(tdName);
          tr.appendChild(tdPoints);
          tdName.appendChild(name);
          tdPoints.appendChild(points);
        });
      }
      calcTotalPoints();
    }
  };

  myRequest.open("GET", "data.json", true);
  myRequest.send();
}

getData();
