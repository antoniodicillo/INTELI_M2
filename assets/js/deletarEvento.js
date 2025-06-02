
// POST: novo evento
document.getElementById('delete-event-btn').addEventListener('click', async () => {

  await fetch('/api/create-event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

});
