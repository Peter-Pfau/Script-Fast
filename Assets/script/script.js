function submitScript() {
    var scriptName = document.getElementById("script-name").value;
    var scriptType = document.getElementById("script-type").value;
    var scriptDescription = document.getElementById("script-description").value;
    var scriptExample = document.getElementById("script-example").value;
    var scriptCode = document.getElementById("script-code").value;
    var Begin = "Begin {<br>$global:start = Get-Date<br>$global:collectionTable=@()<br>$global:totalCount = 0<br>}";
    var Process = "Process {<br>"+ scriptCode +"<br><br>$global:totalCount++<br>$global:collectionTable += $PSItem<br>}<br>";
    var End = "End {<br>$global:end = Get-Date<br>$global:elapsedTime = $global:end - $global:start<br>Write-Host 'Total Count: ' $global:totalCount<br>Write-Host 'Elapsed Time: ' $global:elapsedTime<br>}";
    var output = document.getElementById("output");
    // output.innerHTML = "Script Name: " + scriptName + "<br>Script Type: " + scriptType + "<br>Script Description: " + scriptDescription + "<br>Script Code: " + scriptCode;
    output = "<# <br>.Synopsis<br>    " + scriptDescription + "<br>.Description<br>    " + scriptDescription + "<br>.Example<br>    " + scriptExample + scriptName+"<br>#>" +
    "<br> param ( <br> [parameter(Mandatory=$false,ValueFromPipeline=$true)] <br> [string]$ComputerName = $env:COMPUTERNAME <br> ) <br> <br> " +
    Begin + "<br> " + 
    Process + "<br> " + 
    End + "<br> "
    document.getElementById("Popupwindow").innerHTML = output
    modal.style.display = "block";

} 

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
    modal.style.display = "block";
    output.innerHTML = ""
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    output.innerHTML = ""
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        output.innerHTML = ""
    }
}