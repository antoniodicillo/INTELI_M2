
// POST: novo evento
document.getElementById('create-event-btn').addEventListener('click', async () => {
  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const location = document.getElementById('location').value;
  const body = document.getElementById('body').value;
  const time = document.getElementById('time').value;
  
  await fetch('/api/create-event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, date, time, location, body }),
  });

});

