window.onload = function() {
    document.getElementById('popup-ad').style.display = 'block';
  };
  
  document.getElementById('close-popup-ad').addEventListener('click', function() {
    document.getElementById('popup-ad').style.display = 'none';
  });

  function showJoinSuccessMessage() {
    alert('Successful join');
  }