function buildComponent(component, data) {
  const el = document.createElement('div');
  el.innerHTML = component(data);
  return el.firstElementChild;
}

export function renderDOM($container, component, data = []) {
  $container.innerHTML = '';
  if (Array.isArray(data)) {
    data.forEach(data => {
      $container.append(buildComponent(component, data));
    });
    return;
  }
  return $container.append(buildComponent(component, data));
}
