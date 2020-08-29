"use strict"

const APIKEY = "&api_key=VA54fQdIr8jFQF7ulG4JDMJOEpACIEKGf717vrRt"
const URL = "https://developer.nps.gov/api/v1/"
var chosenState = ""
var maxResults = 0

function pageLoad(){
    watchForm();
}

function submitRequest(chosenState, masResults){
    fetch(URL + chosenState + maxResults + APIKEY)
    .then(response => response.json())
    .then(responseJson => displayResults(reponseJson))
    .catch(error => alert("Unable to process request at this time.  Please check your entry and try again."))
}

function displayResults(){
    console.log(responseJson);
    $('#results-holder').empty();
    let responseDisplay = "";
    responseJson.forEach(stateInfo => {
        responseDisplay += `<div class = "panel"><h2>Park Name:${park.fullname}</h2><h2>Website Link:<a href = "${park.url}"></a></h2>`
    });
}

function handleUserChoice(){
    maxResults = '&limit='+$('#maxResults').val();
    chosenState = 'parks?stateCode='+$('#state-select').val();
    submitRequest(chosenState, maxResults);
    console.log(URL + chosenState + maxResults + APIKEY)
}

function watchForm() {
    $('#search-form').submit(event => {
        console.log("submission received!")
        event.preventDefault();
        handleUserChoice();
    });
}

$(pageLoad)
