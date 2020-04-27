// The function of creating and forming a date, returns a string
export function setDate() {
  const date = new Date();
    const optionsDate = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
  return date.toLocaleString("ru", optionsDate);
};

// The function that determines the maximum id of existing errors in localStorage
export function findMaxId() {
  let idErrors = getItemLS('errors');
  idErrors = idErrors.map((error) => {
    return error.id;
  });  
  const maxId = idErrors.length === 0 ? 1 : Math.max(...idErrors);
  return maxId;
};

// translate the error's status
export function translateStatus(label) {
  if (label === "new") {
    return "Новая";
  } else if (label === "opened") {
    return "Открытая";
  } else if (label === "resolved") {
    return "Решённая";
  } else {
    return "Закрытая";
  }
}

// translate the error's priority
export function translatePriority(label) {
  if (label === "highest") {
    return "Очень высокий";
  } else if (label === "high") {
    return "Высокий";
  } else if (label === "medium") {
    return "Средний";
  } else {
    return "Низкий";
  }
};

// filter current error for kanban
export function filterCurrentError(arr) {
  return arr.filter((error) => error.current === true);
};

// filter errors for newErrors, openedErrors, resolvedErrors, closedErrors
export function filterErrors (data) {
  let newErrors = [];
  let openedErrors = [];
  let resolvedErrors = [];
  let closedErrors = [];   

  data.forEach((item) => {
    if (item.status === "new") {
      newErrors.push(item)
    } else if (item.status === "opened") {
      openedErrors.push(item)
    } else if (item.status === "resolved") {
      resolvedErrors.push(item)
    } else {
      closedErrors.push(item)
    }
  });
  return {  newErrors: newErrors,
            openedErrors: openedErrors,
            resolvedErrors: resolvedErrors, 
            closedErrors: closedErrors};
}

// get item form localStorage
export function getItemLS(key) {
  if (localStorage[key] === undefined) {
    return null;
  }

  let value;
  try {
    value = JSON.parse(localStorage[key]);
  } catch(e) {
    value = localStorage[key];
  }

  return value;
}

// set Item to localStorage
export function setItemLS (key, val) {
  if (val instanceof Object) {
    localStorage.setItem(key, JSON.stringify(val));
  } else {
    localStorage.setItem(key, val)
  }
}