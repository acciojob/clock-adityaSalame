//your JS code here. If required.
let timer=document.createElement("P");
timer.setAttribute("id","timer");
document.body.appendChild(timer);
function updateTimer() {
            let now = new Date();
            let date = now.toLocaleDateString();
            let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            let displayString = date + ', ' + time;

            document.getElementById('timer').textContent = displayString;
        }

        // Run the updateTimer function every second
        setInterval(updateTimer, 1000);
