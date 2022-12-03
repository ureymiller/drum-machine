$(document).ready(function() {
  var powerOn = false;
  var selectedStyle = "hiphop";
  var sound;
  var volume = $("#volume-slider").attr("value");
  
  var q = {};
  var w = {};
  var e = {};
  var a = {};
  var s = {};
  var d = {};
  var y = {};
  var x = {};
  var c = {};

  // click event for turning screen on and off
  $(".power-button").click(function() {
    powerOn = !powerOn
    $(".display-text").text("");
    if(powerOn) {
      $(".display").css("background", "var(--display-on)");
      $(this).css("border", "3px solid var(--display-border)");
      reloadSources();
    } else {
      $(".display").css("background", "var(--display-off)");
      $(this).css("border", "none");
    }
  });

  $(".hiphop-button").click(function() {
    selectedStyle = "hiphop";
    reloadSources();
    $(this).css("border", "3px solid var(--display-border)");
    $(".classic-button").css("border", "none");
    $(".synth-button").css("border", "none");
  });
  
  $(".classic-button").click(function() {
    selectedStyle = "classic";
    reloadSources();
    $(this).css("border", "3px solid var(--display-border)");
    $(".hiphop-button").css("border", "none");
    $(".synth-button").css("border", "none");
  });

  $(".synth-button").click(function() {
    selectedStyle = "synth";
    reloadSources();
    $(this).css("border", "3px solid var(--display-border)");
    $(".classic-button").css("border", "none");
    $(".hiphop-button").css("border", "none");
  });

  $(".drum-wrapper").children().click(function() {
    let buttonId = this.id;
    playSound(buttonId);
  })
  
  // key click events
  $(document).on("keypress", function(event) {
    if(powerOn) {
      switch(event.which) {
        case 113:
          playSound("q");
          break;
        case 119:
          playSound("w");
          break;
        case 101:
          playSound("e");
          break;
        case 97:
          playSound("a");
          break;
        case 115:
          playSound("s");
          break;
        case 100:
          playSound("d");
          break;
        case 121:
          playSound("y");
          break;
        case 120:
          playSound("x");
          break;
        case 99:
          playSound("c");
          break;
      }
    }
  });

  // function declarations
  function reloadSources() {
    switch(selectedStyle) {
      case "hiphop":
        q.source = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
        q.name = "Heater 1";
        
        w.source = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
        w.name = "Heater 2";
        
        e.source = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
        e.name = "Heater 3";
        
        a.source = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
        a.name = "Heater 4";
        
        s.source = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
        s.name = "Clap";
        
        d.source = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
        d.name = "Open HH";
        
        y.source = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
        y.name = "Kick 'n Hat";
        
        x.source = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
        x.name = "Kick";
        
        c.source = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
        c.name = "Closed HH";
        break;
      case "classic":
        q.source = "";
        q.name = "";
        
        w.source = "";
        w.name = "";
        
        e.source = "";
        e.name = "";
        
        a.source = "";
        a.name = "";
        
        s.source = "";
        s.name = "";
        
        d.source = "";
        d.name = "";
        
        y.source = "";
        y.name = "";
        
        x.source = "";
        x.name = "";
        
        c.source = "";
        c.name = "";
        break;
      case "synth":
        q.source = "";
        q.name = "";
        
        w.source = "";
        w.name = "";
        
        e.source = "";
        e.name = "";
        
        a.source = "";
        a.name = "";
        
        s.source = "";
        s.name = "";
        
        d.source = "";
        d.name = "";
        
        y.source = "";
        y.name = "";
        
        x.source = "";
        x.name = "";
        
        c.source = "";
        c.name = "";
        break;
      default: 
        alert("error");
        break;
    }
  }

  function playSound(id) {
    if(powerOn) {
      switch(id) {
        case "q":
          sound = new Audio(q.source);
          $(".display-text").text(q.name);
          break;
        case "w":
          sound = new Audio(w.source);
          $(".display-text").text(w.name);
          break;
        case "e":
          sound = new Audio(e.source);
          $(".display-text").text(e.name);
          break;
        case "a":
          sound = new Audio(a.source);
          $(".display-text").text(a.name);
          break;
        case "s":
          sound = new Audio(s.source);
          $(".display-text").text(s.name);
          break;
        case "d":
          sound = new Audio(d.source);
          $(".display-text").text(d.name);
          break;
        case "y":
          sound = new Audio(y.source);
          $(".display-text").text(y.name);
          break;
        case "x":
          sound = new Audio(x.source);
          $(".display-text").text(x.name);
          break;
        case "c":
          sound = new Audio(c.source);
          $(".display-text").text(c.name);
          break;
      }
      sound.volume = volume;
      sound.play();
    }
  }

  $("#volume-slider").change(function() {
    volume = this.value;
  });
});
