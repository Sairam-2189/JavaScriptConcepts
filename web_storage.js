// * Web Storage

// * Web storage objects localStorage and sessionStorage allow to save key/value pairs in the browser.
// * It is used to store the data in the browsers.
// * It can store only strings.
// * There are 2 ways to store data
// * 1.Session Storage
// * 2.Local Storage
// * session storage and local storage are stored in the window object.
// * which is the global object.

// * If we store data in Session Storage, the data is persisted only for that particular session.
// * The sessionStorage exists only within the current browser tab.
// * Another tab with the same page will have a different storage.
// * But it is shared between iframes in the same tab (assuming they come from the same origin).
// * The data survives page refresh, but not closing/opening the tab.
// * The sessionStorage object is used much less often than localStorage.
// * Unlike cookies, the session storage data is not sent to server while
// * making network requests(API calls).
// * In cookies, you can store 4000 bytes of data. In session storage, you can store more than it.

// * If we store data in Local Storage, the data can be shared between all tabs
// * and windows from the same origin.
// * The data does not expire. It can store more data than cookies.

// * Storage API's follow same origin policy.
// * Origin comprises of 3 parts.
// * 1. Protocol --> http or https
// * 2. Host     --> myhost.com or myhost.in
// * 3. Port     --> 8080 or wherever your app is hosted.

// * Example for same origin policy :-
// * we stored data in http://myhost.com .
// ! Can we access the stored data from http://myhost.com/newPage ?
// ? Yes, we can access the data. Because, we are on the same origin.
// ? origin means our protocol, host and port should remain the same.

// ! There are some examples below, where you cannot access your data.
// ! https://myhost.com     ---> Here, the protocol(https) is not same the original protocol(http).
// ! http://some.myhost.com ---> Here, the host is not same as where we stored the data.
// ! http://myhost.com:8080 ---> Here, the port is not same as where we stored the data.

// * Code Example for storing data in LocalStorage and SessionStorage :-

// * setItem --> It is a function which takes a key and value as arguments.
// * key and value must be strings.

localStorage.setItem("name", "rohit");
localStorage.setItem("age", "24");

// ! if you try to use the setItem on the same key, the value will be overrided.
// ! localStorage.setIem("name","pavan"); ---> rohit changed to pavan.

// * for fetching data, we need to use getItem function.
// * getItem --> It is a function which takes a key as an argument.

localStorage.getItem("name"); // ? "rohit"

// * for removing data, we need to use removeItem function.
// * removeItem --> It is a function which takes a key as an argument.

localStorage.removeItem("name"); // ? It will remove "name" property and it's value "rohit" from localStorage.

// * for clearing all data in localStorage, we need to use clear() function.
// * clear --> It is a function which has no arguments

// * localStorage.clear();
// ? It will remove all the data present in localStorage.

// ! LocalStorage store strings. How you will store objects ?

// * let employee={name:'Akshay kumar'};
// * localStorage.setItem("employee",employee);
// * This results in "[object Object]"

// ? To reslove above problem using stringfy and parse methods.

localStorage.setItem("employee", JSON.stringify(employee));
// * stringfy method is used to stringfy the object --> {"name":"Akshay kumar"}

// * localStorage.getItem("employee");
// * Now, we will get like this "{"name":"Akshay kumar"}"

// * For resolving this problem, we will use parse method
JSON.parse(localStorage.getItem("employee")); // * {name:"Akshay kumar"}
