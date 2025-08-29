fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('table-container');
    
    if (!data.length) {
      container.textContent = 'No data available';
      return;
    }
    
    // Create HTML table element
    let table = '<table border="1"><thead><tr>';
    
    // Extract keys for headers
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
      table += `<th>${header.charAt(0).toUpperCase() + header.slice(1)}</th>`;
    });
    table += '</tr></thead><tbody>';
    
    // Fill rows
    data.forEach(entry => {
      table += '<tr>';
      headers.forEach(key => {
        table += `<td>${entry[key]}</td>`;
      });
      table += '</tr>';
    });
    
    table += '</tbody></table>';
    
    container.innerHTML = table;
  })
  .catch(error => {
    document.getElementById('table-container').textContent = 'Error loading data';
    console.error('Error:', error);
  });
