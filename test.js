$.ajax({
    dataType: "json",
    url: '/database.json',
    data: 'users',
    success: success
  });

  $.getJson('database.')