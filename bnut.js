Drupal.bnutRebuildNat = function(step) {
  var settings = Drupal.settings.bnut;
  $('#edit-rebuild-nat').hide();
  $('#bnut-rebuild-nat-status').show();
  $('#bnut-message').load(settings.natPath, {step:step}, function(message) {
    if (message == 'done') {
      $('#bnut-rebuild-nat-status').html('<p><strong>Done</strong></p>');
    }
    else {
      Drupal.bnutRebuildNat(step+1);
    }
  });
}

Drupal.bnutRebuildNcs = function(step) {
  var settings = Drupal.settings.bnut;
  $('#edit-rebuild-ncs').hide();
  $('#bnut-rebuild-ncs-status').show();
  $('#bnut-message').load(settings.ncsPath, {step:step}, function(message) {
    if (message == 'done') {
      $('#bnut-rebuild-ncs-status').html('<p><strong>Done</strong></p>');
    }
    else {
      Drupal.bnutRebuildNcs(step+1);
    }
  });
}

Drupal.bnutAutoAttach = function() {
  var settings = Drupal.settings.bnut;
  $('#edit-rebuild-nat').before("<div id='bnut-rebuild-nat-status' class='bnut-status message status' style='display:none;'>" + 
    "<p><strong>Rebuild status</strong><br/>" + 
    "<img src='/" + settings.loadingIndicatorPath + "' /><br/>" +
    "<span id='bnut-message'></span>" +
    "</p></div>");
    
  $('#edit-rebuild-ncs').before("<div id='bnut-rebuild-ncs-status' class='bnut-status message status' style='display:none;'>" + 
    "<p><strong>Rebuild status</strong><br/>" + 
    "<img src='/" + settings.loadingIndicatorPath + "' /><br/>" +
    "<span id='bnut-message'></span>" +
    "</p></div>");
}


if (Drupal.jsEnabled) {
  $(document).ready(Drupal.bnutAutoAttach);
}