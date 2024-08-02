// Your code here.
// Variables to track the state of the drag operation
    let isDragging = false;
    let initialX, currentX;
    let cube;

    // Function to handle the mouse down event
    function handleMouseDown(event) {
      isDragging = true;
      initialX = event.clientX;
      cube = event.target;
      cube.style.cursor = 'grabbing';
    }

    // Function to handle the mouse move event
    function handleMouseMove(event) {
      if (!isDragging) return;

      currentX = event.clientX;
      const deltaX = currentX - initialX;

      cube.style.transform = `translateX(${deltaX}px)`;
    }

    // Function to handle the mouse up event
    function handleMouseUp() {
      isDragging = false;
      cube.style.cursor = 'grab';
    }

    // Add event listeners to each cube
    const cubes = document.querySelectorAll('.cube');
    cubes.forEach(cube => {
      cube.addEventListener('mousedown', handleMouseDown);
      cube.addEventListener('mousemove', handleMouseMove);
      cube.addEventListener('mouseup', handleMouseUp);
    });
