function $(selector) {
	const elements = document.querySelectorAll(selector);

	// Mimic some jQuery functions or add your own vanilla JavaScript functions here
	const morefunctions = {
		// Example: Add a class to the selected elements
		addClass: function (className) {
			elements.forEach((element) => {
				element.classList.add(className);
			});
			return morefunctions;
		},

		// Example: Remove a class from the selected elements
		removeClass: function (className) {
			elements.forEach((element) => {
				element.classList.remove(className);
			});
			return morefunctions;
		},

		toggleClass: function (className) {
			elements.forEach((element) => {
				element.classList.toggle(className);
			});
			return morefunctions;
		},

		css: function (property, value) {
			elements.forEach((element) => {
				element.style[property] = value;
			});
			return morefunctions;
		},

		on: function (eventName, handler) {
			elements.forEach((element) => {
				element.addEventListener(eventName, handler);
			});
			return morefunctions;
		},

		fadeIn: function (duration = 400) {
			elements.forEach((element) => {
				element.style.transition = `opacity ${duration}ms`;
				element.style.opacity = 1;
			});
			return morefunctions;
		},

		hide: function () {
			elements.forEach((element) => {
				element.style.display = "none";
			});
			return morefunctions;
		},

		remove: function (childSelector) {
			elements.forEach((element) => {
				if (childSelector) {
					const childrenToRemove =
						element.querySelectorAll(childSelector);
					childrenToRemove.forEach((child) => {
						child.parentNode.removeChild(child);
					});
				} else {
					element.parentNode.removeChild(element);
				}
			});
			return morefunctions;
		},

		show: function (displayValue = "block") {
			elements.forEach((element) => {
				element.style.display = displayValue;
			});
			return morefunctions;
		},

		parent: function () {
			const parentElements = [];
			elements.forEach((element) => {
				const parent = element.parentNode;
				if (parent && !parentElements.includes(parent)) {
					parentElements.push(parent);
				}
			});
			return $(parentElements);
		},

		child: function (childSelector) {
			const childElements = [];
			elements.forEach((element) => {
				const children = element.querySelectorAll(childSelector);
				children.forEach((child) => {
					if (!childElements.includes(child)) {
						childElements.push(child);
					}
				});
			});
			return $(childElements);
		},

		closest: function (selector) {
			const closestElements = [];
			elements.forEach((element) => {
				let current = element;
				while (current && !current.matches(selector)) {
					current = current.parentNode;
				}
				if (current && !closestElements.includes(current)) {
					closestElements.push(current);
				}
			});
			return $(closestElements);
		},

		next: function () {
			const nextElements = [];
			elements.forEach((element) => {
				let current = element.nextElementSibling;
				while (current) {
					nextElements.push(current);
					current = current.nextElementSibling;
				}
			});
			return $(nextElements);
		},

		val: function (newValue) {
			if (newValue !== undefined) {
				// Setter: Set the value of the selected elements
				elements.forEach((element) => {
					element.value = newValue;
				});
				return morefunctions;
			} else {
				// Getter: Return the value of the first matched element
				return elements.length > 0 ? elements[0].value : undefined;
			}
		},

		text: function (newText) {
			if (newText !== undefined) {
				// Setter: Set the text content of the selected elements
				elements.forEach((element) => {
					element.textContent = newText;
				});
				return morefunctions;
			} else {
				// Getter: Return the text content of the first matched element
				return elements.length > 0
					? elements[0].textContent
					: undefined;
			}
		},

		html: function (newHtml) {
			if (newHtml !== undefined) {
				// Setter: Set the HTML content of the selected elements
				elements.forEach((element) => {
					element.innerHTML = newHtml;
				});
				return morefunctions;
			} else {
				// Getter: Return the HTML content of the first matched element
				return elements.length > 0 ? elements[0].innerHTML : undefined;
			}
		},

		find: function (childSelector) {
			const foundElements = [];
			elements.forEach((element) => {
				const children = element.querySelectorAll(childSelector);
				children.forEach((child) => {
					if (!foundElements.includes(child)) {
						foundElements.push(child);
					}
				});
			});
			return $(foundElements);
		},

		append: function (content) {
			elements.forEach((element) => {
				if (typeof content === "string") {
					element.insertAdjacentHTML("beforeend", content);
				} else if (content instanceof HTMLElement) {
					element.appendChild(content.cloneNode(true));
				}
			});
			return morefunctions;
		},

		hasClass: function (className) {
			return (
				elements.length > 0 && elements[0].classList.contains(className)
			);
		},

		attr: function (attributeName, value) {
			if (value === undefined) {
				return elements.length > 0
					? elements[0].getAttribute(attributeName)
					: undefined;
			} else {
				elements.forEach((element) => {
					element.setAttribute(attributeName, value);
				});
				return morefunctions;
			}
		},

		data: function (key, value) {
			if (value === undefined) {
				return elements.length > 0
					? elements[0].dataset[key]
					: undefined;
			} else {
				elements.forEach((element) => {
					element.dataset[key] = value;
				});
				return morefunctions;
			}
		},

		siblings: function () {
			const siblingElements = [];
			elements.forEach((element) => {
				const siblings = Array.from(element.parentNode.children).filter(
					(child) => child !== element
				);
				siblingElements.push(...siblings);
			});
			return $(siblingElements);
		},

		focus: function () {
			if (elements.length > 0) {
				elements[0].focus();
			}
			return morefunctions;
		},

		before: function (content) {
			elements.forEach((element) => {
				if (typeof content === "string") {
					element.insertAdjacentHTML("beforebegin", content);
				} else if (content instanceof HTMLElement) {
					element.parentNode.insertBefore(
						content.cloneNode(true),
						element
					);
				}
			});
			return morefunctions;
		},

		after: function (content) {
			elements.forEach((element) => {
				if (typeof content === "string") {
					element.insertAdjacentHTML("afterend", content);
				} else if (content instanceof HTMLElement) {
					element.parentNode.insertBefore(
						content.cloneNode(true),
						element.nextSibling
					);
				}
			});
			return morefunctions;
		},

		replaceWith: function (content) {
			elements.forEach((element) => {
				if (typeof content === "string") {
					element.outerHTML = content;
				} else if (content instanceof HTMLElement) {
					element.parentNode.replaceChild(
						content.cloneNode(true),
						element
					);
				}
			});
			return morefunctions;
		},

		empty: function () {
			elements.forEach((element) => {
				element.innerHTML = "";
			});
			return morefunctions;
		},

		animate: function (properties, duration, easing, callback) {
			elements.forEach((element) => {
				const initialStyles = getComputedStyle(element);

				for (const property in properties) {
					const startValue = parseFloat(initialStyles[property]) || 0;
					const endValue = parseFloat(properties[property]);
					const unit =
						(typeof properties[property] === "string" &&
							properties[property].match(/px|%|em/)) ||
						"";
					const difference = endValue - startValue;

					let startTime;
					function step(timestamp) {
						if (!startTime) startTime = timestamp;
						const progress = Math.min(
							(timestamp - startTime) / duration,
							1
						);
						const easedProgress = easing(progress);

						element.style[property] =
							startValue + easedProgress * difference + unit;

						if (progress < 1) {
							requestAnimationFrame(step);
						} else {
							callback && callback();
						}
					}

					requestAnimationFrame(step);
				}
			});

			return morefunctions;
		},

		one: function (eventName, handler) {
			elements.forEach((element) => {
				const oneTimeHandler = function (event) {
					handler(event);
					element.removeEventListener(eventName, oneTimeHandler);
				};
				element.addEventListener(eventName, oneTimeHandler);
			});
			return morefunctions;
		},

		off: function (eventName, handler) {
			elements.forEach((element) => {
				element.removeEventListener(eventName, handler);
			});
			return morefunctions;
		},

		each: function (callback) {
			elements.forEach((element, index) => {
				callback.call(element, index, element);
			});
			return morefunctions;
		},

		extend: function (target, ...sources) {
			sources.forEach((source) => {
				for (const key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			});
			return morefunctions;
		},

		slideDown: function (duration = 400, easing = "swing", callback) {
			elements.forEach((element) => {
				element.style.transition = `height ${duration}ms ${easing}`;
				element.style.overflow = "hidden";
				element.style.height = element.scrollHeight + "px";

				setTimeout(() => {
					element.style.height = "";
					element.style.transition = "";
					callback && callback();
				}, duration);
			});
			return morefunctions;
		},

		slideUp: function (duration = 400, easing = "swing", callback) {
			elements.forEach((element) => {
				element.style.transition = `height ${duration}ms ${easing}`;
				element.style.height = element.scrollHeight + "px";

				setTimeout(() => {
					element.style.height = "0";
					element.style.transition = "";
					callback && callback();
				}, 0);
			});
			return morefunctions;
		},

		slideToggle: function (duration = 400, easing = "swing", callback) {
			elements.forEach((element) => {
				if (window.getComputedStyle(element).display === "none") {
					morefunctions.slideDown.call(
						element,
						duration,
						easing,
						callback
					);
				} else {
					morefunctions.slideUp.call(
						element,
						duration,
						easing,
						callback
					);
				}
			});
			return morefunctions;
		},

		prop: function (propertyName, value) {
			if (value !== undefined) {
				elements.forEach((element) => {
					element[propertyName] = value;
				});
				return morefunctions;
			} else {
				return elements.length > 0
					? elements[0][propertyName]
					: undefined;
			}
		},

		trim: function () {
			elements.forEach((element) => {
				if (element.nodeType === 3) {
					// Text node
					element.nodeValue = element.nodeValue.trim();
				} else if (element.nodeType === 1) {
					// Element node
					element.textContent = element.textContent.trim();
				}
			});
			return morefunctions;
		},

		parseInt: function (radix = 10) {
			return elements.length > 0
				? parseInt(elements[0].textContent, radix)
				: NaN;
		},

		parseStr: function () {
			return elements.length > 0
				? parseFloat(elements[0].textContent)
				: NaN;
		},

		replace: function (pattern, replacement) {
			elements.forEach((element) => {
				if (element.nodeType === 3) {
					// Text node
					element.nodeValue = element.nodeValue.replace(
						pattern,
						replacement
					);
				} else if (element.nodeType === 1) {
					// Element node
					element.textContent = element.textContent.replace(
						pattern,
						replacement
					);
				}
			});
			return morefunctions;
		},

		width: function () {
			return elements.length > 0 ? elements[0].offsetWidth : undefined;
		},

		height: function () {
			return elements.length > 0 ? elements[0].offsetHeight : undefined;
		},

		is: function (selector) {
			return elements.length > 0 ? elements[0].matches(selector) : false;
		},

		play: function () {
			elements.forEach((element) => {
				if (element instanceof HTMLMediaElement) {
					element.play();
				}
			});
			return morefunctions;
		},

		mute: function () {
			elements.forEach((element) => {
				if (element instanceof HTMLMediaElement) {
					element.muted = true;
				}
			});
			return morefunctions;
		},

		stop: function () {
			elements.forEach((element) => {
				if (element instanceof HTMLMediaElement) {
					element.pause();
					element.currentTime = 0;
				}
			});
			return morefunctions;
		},

		pause: function () {
			elements.forEach((element) => {
				if (element instanceof HTMLMediaElement) {
					element.pause();
				}
			});
			return morefunctions;
		},

		random: function () {
			const randomIndex = Math.floor(Math.random() * elements.length);
			return elements.length > 0 ? elements[randomIndex] : undefined;
		},

		ready: function (callback) {
			if (
				document.readyState === "complete" ||
				(document.readyState !== "loading" &&
					!document.documentElement.doScroll)
			) {
				callback();
			} else {
				document.addEventListener("DOMContentLoaded", callback);
			}
			return morefunctions;
		},

		unbind: function (eventName, handler) {
			elements.forEach((element) => {
				element.removeEventListener(eventName, handler);
			});
			return morefunctions;
		},

		mouseover: function (handler) {
			elements.forEach((element) => {
				element.addEventListener("mouseover", handler);
			});
			return morefunctions;
		},

		mouseenter: function (handler) {
			elements.forEach((element) => {
				element.addEventListener("mouseenter", handler);
			});
			return morefunctions;
		},

		mouseleave: function (handler) {
			elements.forEach((element) => {
				element.addEventListener("mouseleave", handler);
			});
			return morefunctions;
		},

		hover: function (mouseenterHandler, mouseleaveHandler) {
			elements.forEach((element) => {
				element.addEventListener("mouseenter", mouseenterHandler);
				element.addEventListener("mouseleave", mouseleaveHandler);
			});
			return morefunctions;
		},

		mousedown: function (handler) {
			elements.forEach((element) => {
				element.addEventListener("mousedown", handler);
			});
			return morefunctions;
		},

		mouseup: function (handler) {
			elements.forEach((element) => {
				element.addEventListener("mouseup", handler);
			});
			return morefunctions;
		},

		dblclick: function (handler) {
			elements.forEach((element) => {
				element.addEventListener("dblclick", handler);
			});
			return morefunctions;
		},

		blur: function (handler) {
			elements.forEach((element) => {
				element.addEventListener("blur", handler);
			});
			return morefunctions;
		},

		prepend: function (content) {
			elements.forEach((element) => {
				element.insertAdjacentHTML("afterbegin", content);
			});
			return morefunctions;
		},

		innerWidth: function () {
			return elements.length > 0 ? elements[0].clientWidth : undefined;
		},

		innerHeight: function () {
			return elements.length > 0 ? elements[0].clientHeight : undefined;
		},

		outerWidth: function () {
			return elements.length > 0 ? elements[0].offsetWidth : undefined;
		},

		outerHeight: function () {
			return elements.length > 0 ? elements[0].offsetHeight : undefined;
		},

		parents: function () {
			const parentNodes = new Set();
			elements.forEach((element) => {
				let parent = element.parentNode;
				while (parent) {
					parentNodes.add(parent);
					parent = parent.parentNode;
				}
			});
			return Array.from(parentNodes);
		},

		parentsUntil: function (untilSelector) {
			const parentNodes = new Set();
			elements.forEach((element) => {
				let parent = element.parentNode;
				while (parent && !parent.matches(untilSelector)) {
					parentNodes.add(parent);
					parent = parent.parentNode;
				}
			});
			return Array.from(parentNodes);
		},

		nextAll: function () {
			const nextSiblings = new Set();
			elements.forEach((element) => {
				let sibling = element.nextElementSibling;
				while (sibling) {
					nextSiblings.add(sibling);
					sibling = sibling.nextElementSibling;
				}
			});
			return Array.from(nextSiblings);
		},

		nextUntil: function (untilSelector) {
			const nextSiblings = new Set();
			elements.forEach((element) => {
				let sibling = element.nextElementSibling;
				while (sibling && !sibling.matches(untilSelector)) {
					nextSiblings.add(sibling);
					sibling = sibling.nextElementSibling;
				}
			});
			return Array.from(nextSiblings);
		},

		prev: function () {
			return elements.length > 0
				? elements[0].previousElementSibling
				: undefined;
		},

		prevAll: function () {
			const prevSiblings = new Set();
			elements.forEach((element) => {
				let sibling = element.previousElementSibling;
				while (sibling) {
					prevSiblings.add(sibling);
					sibling = sibling.previousElementSibling;
				}
			});
			return Array.from(prevSiblings);
		},

		prevUntil: function (untilSelector) {
			const prevSiblings = new Set();
			elements.forEach((element) => {
				let sibling = element.previousElementSibling;
				while (sibling && !sibling.matches(untilSelector)) {
					prevSiblings.add(sibling);
					sibling = sibling.previousElementSibling;
				}
			});
			return Array.from(prevSiblings);
		},

		first: function () {
			return elements.length > 0 ? elements[0] : undefined;
		},

		last: function () {
			return elements.length > 0
				? elements[elements.length - 1]
				: undefined;
		},

		eq: function (index) {
			return elements.length > index ? elements[index] : undefined;
		},

		filter: function (selector) {
			const filteredElements = Array.from(elements).filter((element) =>
				element.matches(selector)
			);
			return $(filteredElements);
		},

		not: function (selector) {
			const notElements = Array.from(document.querySelectorAll(selector));
			const filteredElements = Array.from(elements).filter(
				(element) => !notElements.includes(element)
			);
			return $(filteredElements);
		},

		join: function (separator = "") {
			return elements.length > 0
				? Array.from(elements)
						.map((element) => element.textContent)
						.join(separator)
				: "";
		},

		split: function (separator) {
			return elements.length > 0
				? elements[0].textContent.split(separator)
				: [];
		},

		pop: function () {
			return elements.length > 0 ? elements[0] : undefined;
		},

		click: function (handler) {
			elements.forEach((element) => {
				element.addEventListener("click", handler);
			});
			return morefunctions;
		},

		// Add more functions as needed
	};

	return morefunctions;
}
/* Usage: (Mimic jQuery, like a mini jQuery)
$("#hello")
    .addClass("highlight")
    .removeClass("inactive")
    .toggleClass("active")
    .hasClass("active");
    .css("color", "blue")
    .text("Hello, World!")
    .val("Search this...")
    and so on...
    .on("click", function() {
        alert("Element clicked!");
    });*/

// Function to go to a certain adress
function goTo(adress) {
	// Redirect to an external page
	window.location.href = adress;
}
/* Usage:
goTo("https://adress.com");
*/

// Function to show a loader in an area while sending XHR
(function ($) {
	$.fn.loader = function (action) {
		if (action === "on") {
			// Turn on the loader
			this.css("opacity", 0);
			this.css("position", "relative");
			var loaderContainer = $('<div class="loader-container"></div>');
			this.parent().append(loaderContainer);
			loaderContainer.fadeIn();
		} else if (action === "off") {
			// Turn off the loader
			this.css("opacity", 1);
			$(".loader-container").remove();
		}
		return this;
	};
})(jQuery);
/* Usage: 
$("#content").loader("on"); 
$("#content").loader("off");
*/

// Function to send XHR JSON faster
function sendXhr(
	method,
	url,
	data,
	callback,
	async = true,
	contentType = "json"
) {
	var xhr = new XMLHttpRequest();

	// Adjust the URL and data based on the request method
	if (method.toUpperCase() === "GET") {
		// Append query parameters to the URL
		const queryString = Object.entries(data)
			.map(
				([key, value]) =>
					`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
			)
			.join("&");
		url += `?${queryString}`;
	} else if (method.toUpperCase() === "POST") {
		// Set the appropriate Content-Type header for POST requests
		xhr.setRequestHeader("Content-Type", mapContentType(contentType));
	}

	xhr.open(method, url, async);

	xhr.onload = function () {
		if (xhr.status === 200) {
			var response = JSON.parse(xhr.responseText);
			callback(null, response);
		} else {
			callback(`Error (${xhr.status}): ${xhr.statusText}`, null);
		}
	};

	xhr.onerror = function () {
		callback("Network error", null);
	};

	// Convert data based on content type
	let sendData = data;
	if (contentType === "json") {
		sendData = JSON.stringify(data);
	} else if (contentType === "url") {
		sendData = new URLSearchParams(data).toString();
	} else if (contentType === "text") {
		sendData = String(data);
	} else if (contentType === "xml") {
		// Implement your own function to convert object to XML
		// sendData = convertObjectToXml(data);
	}

	xhr.send(sendData);
}

// Helper function to map simplified content types to standard MIME types
function mapContentType(contentType) {
	const contentTypeMap = {
		json: "application/json",
		url: "application/x-www-form-urlencoded",
		text: "text/plain",
		xml: "application/xml",
	};

	return contentTypeMap[contentType] || contentType;
}
/* Example usage:
var jsonData = {
    key: "value"
};

var formData = {
    key1: "value1",
    key2: "value2"
};

var textData = "This is plain text.";

sendXhr("POST", "example.php", jsonData, callbackFunction, true, "json");
sendXhr("POST", "example.php", formData, callbackFunction, true, "url");
sendXhr("POST", "example.php", textData, callbackFunction, true, "text");
*/

async function fetchData(url, options = {}) {
	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}
	return await response.json();
}
/* Example Fetch Wrapper
const fetchDataExample = async () => {
    try {
        const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

fetchDataExample();
*/

// Get random number
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* Example Random Number Generator
const randomNumber = getRandomNumber(1, 100);
console.log('Random Number:', randomNumber);
*/

function generateUUID() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
		/[xy]/g,
		function (c) {
			var r = (Math.random() * 16) | 0,
				v = c == "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		}
	);
}
/* Example UUID Generator
const uuid = generateUUID();
console.log('Generated UUID:', uuid);
*/

function generateRandomId(length = 8) {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let randomId = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		randomId += characters.charAt(randomIndex);
	}
	return randomId;
}

// Format a date
function formatDate(date, options = {}) {
	const defaultOptions = { year: "numeric", month: "long", day: "numeric" };
	const mergedOptions = { ...defaultOptions, ...options };
	return new Date(date).toLocaleDateString(undefined, mergedOptions);
}
/* Usage:
const currentDate = new Date();
const formattedDate = formatDate(currentDate);
console.log('Formatted Date:', formattedDate);
*/

function formatNumber(number, separator) {
	if (separator !== "," && separator !== " ") {
		throw new Error('Invalid separator. Please use "," or " "');
	}

	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
/* Usage:
const numberWithCommas = formatNumber(1000000, ',');
console.log(numberWithCommas); // Output: '1,000,000'

const numberWithSpaces = formatNumber(1000000, ' ');
console.log(numberWithSpaces); // Output: '1 000 000'
*/

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

// Detect if the user is on a mobile device
function isMobileDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);
}
/* Usage:
const isMobile = isMobileDevice();
console.log('Is Mobile Device:', isMobile);
*/

// Copy text to the clipboard
function copyToClipboard(text) {
	const textArea = document.createElement("textarea");
	textArea.value = text;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);
}
/* Usage:
const textToCopy = 'Copy this text!';
document.getElementById('copyButton').addEventListener('click', () => copyToClipboard(textToCopy));
or
$('#copyButton').on('click', () => $.copyToClipboard(textToCopy));
*/

// Get URL Parameters
function urlParam(url) {
	const params = {};
	new URL(url).searchParams.forEach((value, key) => (params[key] = value));
	return params;
}
/* Example URL Parameters
const url = 'https://example.com/page?param1=value1&param2=value2';
const params = getUrlParameters(url);
console.log('URL Parameters:', params);
*/

// Capitalize First Letter
function capFirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
/* Example Capitalize First Letter
const capitalizedString = capitalizeFirstLetter('example');
console.log('Capitalized String:', capitalizedString);
*/

// Convert String to All Lowercase
function lowerAll(str) {
	return str.toLowerCase();
}
// Convert String to All Uppercase
function upperAll(str) {
	return str.toUpperCase();
}
/*
const lowercaseString = lowercaseAll(originalString);
console.log('Lowercase String:', lowercaseString);

const uppercaseString = uppercaseAll(originalString);
console.log('Uppercase String:', uppercaseString);
*/

// Detect dark mode
function isDarkModeEnabled() {
	return (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	);
}
/* Usage:
const isDarkMode = isDarkModeEnabled();
console.log('Dark Mode Enabled:', isDarkMode);
*/

// Check age
function isAge(birthdate, specifiedAge) {
	// Convert birthdate to a Date object
	const birthDateObject = new Date(birthdate);

	// Get the current date
	const currentDate = new Date();

	// Calculate the age
	const calculatedAge =
		currentDate.getFullYear() - birthDateObject.getFullYear();

	// Check if the specified age matches the calculated age
	return specifiedAge === calculatedAge;
}
/*
const birthdate = "1990-01-01"; // Replace with the actual birthdate in 'YYYY-MM-DD' format
const specifiedAge = 32; // Replace with the desired age

const result = isAge(birthdate, specifiedAge);

if (result) {
	console.log(`The person is ${specifiedAge} years old.`);
} else {
	console.log(`The person is not ${specifiedAge} years old.`);
}
*/

function themeSwitcher(themeStylesheetSelector, themeSwitcherSelector) {
	const themeStylesheet = $(themeStylesheetSelector);
	const themeSwitcher = $(themeSwitcherSelector);

	// Retrieve the selected theme from the cookie (or use the default theme)
	const selectedTheme = getCookie("selectedTheme") || "light.css";

	// Retrieve the theme path from a data attribute on the themeStylesheet element
	const themePath = themeStylesheet.data("theme-path") || "";

	// Set the initial theme based on the user's cookie preference
	themeStylesheet.attr("href", themePath + "/" + selectedTheme);

	// Apply the appropriate class to the theme switcher button
	if (selectedTheme.endsWith("light.css")) {
		themeSwitcher.addClass("skin-dark").removeClass("skin-light");
	} else {
		themeSwitcher.addClass("skin-light").removeClass("skin-dark");
	}

	// Handle theme switching and update the cookie
	themeSwitcher.click(function () {
		const currentTheme = themeStylesheet.attr("href");
		const newTheme = currentTheme.endsWith("light.css")
			? "dark.css"
			: "light.css";

		// Update the href attribute of the stylesheet
		themeStylesheet.attr("href", themePath + "/" + newTheme);

		// Update the class of the theme switcher button
		themeSwitcher.toggleClass("skin-light skin-dark");

		// Store the selected theme in a cookie
		setCookie("selectedTheme", newTheme, 365); // Set the cookie to expire in 365 days
	});
}
/* Example usage
themeSwitcher("#theme-selector", "#theme-switcher");
*/

function toArray(arrayLike) {
	return Array.from(arrayLike);
}
/* Example Convert Array-like to Array
const nodeList = document.querySelectorAll('p');
const arrayFromNodeList = toArray(nodeList);
console.log('Array from NodeList:', arrayFromNodeList);
*/

// Deep merge objects
function deepMerge(target, source) {
	for (const key in source) {
		if (source[key] instanceof Object) {
			target[key] = deepMerge(target[key], source[key]);
		} else {
			target[key] = source[key];
		}
	}
	return { ...target };
}
/* Usage:
const obj1 = { a: { b: 1, c: { d: 2 } } };
const obj2 = { a: { b: 3, c: { e: 4 } }, f: 5 };
const mergedObject = deepMerge(obj1, obj2);
console.log('Merged Object:', mergedObject);
*/

function createElement(tag, attributes = {}) {
	const element = document.createElement(tag);
	Object.entries(attributes).forEach(([key, value]) => {
		if (key.startsWith("data-")) {
			// If the attribute starts with 'data-', set it as a dataset property
			const dataKey = key.replace("data-", "");
			element.dataset[dataKey] = value;
		} else {
			// Otherwise, set it as a regular attribute
			element.setAttribute(key, value);
		}
	});
	return element;
}
/* Example Element Creation
const newDiv = createElement('div', {
    id: 'newDiv',
    class: 'example-class',
    style: 'color: blue;', // Example: Adding a style attribute
    dataCustom: 'custom-data-value' // Example: Adding a custom data attribute
});
document.body.appendChild(newDiv);
*/

// Function to set a cookie with a specified name,
// value, and expiration(in days)
function setCookie(name, value, days) {
	const expirationDate = new Date();
	expirationDate.setDate(expirationDate.getDate() + days);
	const expires = "expires=" + expirationDate.toUTCString();
	const path = "path=/"; // Set the path to the root
	document.cookie = name + "=" + value + ";" + expires + ";" + path;
}
/* Usage:
setCookie("cookievariable", variablevalue, 365);
*/

// Function to get the value of a cookie by name
function getCookie(name) {
	const cookieName = name + "=";
	const cookies = document.cookie.split(";");
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i].trim();
		if (cookie.indexOf(cookieName) === 0) {
			return cookie.substring(cookieName.length, cookie.length);
		}
	}
	return "";
}
/* Usage:
const variable = getCookie("cookievariable");
*/

// Function to delete a cookie by name
function deleteCookie(name) {
	// Set the expiration date of the cookie to a date in the past
	document.cookie =
		name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
/* Usage:
deleteCookie("cookievariable");
*/

var emailInput;
var passwordInput;

function onlyValidText(selector, type) {
	const elements = document.querySelectorAll(selector);

	elements.forEach((element) => {
		element.addEventListener("input", function (event) {
			const inputValue = event.target.value;

			let sanitizedValue = "";

			if (type === "email") {
				// Email validation using a regular expression
				sanitizedValue = inputValue.replace(/[^\w@._-]/g, "");
			} else if (type === "text") {
				// Allow letters, numbers, spaces, and some special characters
				sanitizedValue = inputValue.replace(
					/[^\w\s!@#$%^&*()_+\-=\[\]{}|;:'",.<>?\\/]/g,
					""
				);
			} else if (type === "password") {
				// Allow a wider range of characters for passwords
				sanitizedValue = inputValue;
			}

			event.target.value = sanitizedValue;
		});
	});
}
/* Usage:
onlyValidText("#selector-email", "email"); // Allows you to only write email characters
onlyValidText("#selector-password", "password"); // Allows you to only write password characters
*/

// Function to sanitize input to prevent SQL injection
function sanitizeInput(input) {
	// Replace dangerous characters with empty strings
	return input.replace(/[()[]"'`]+/g, "");
}
/* Usage:
sanitizeInput(input);
*/

// Function to validate email
function isValidEmail(email) {
	// Use a regular expression to validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
/* Usage:
const isValid = isValidEmail(emailToValidate);
if (isValid) {
    console.log("The email is valid.");
} else {
    console.log("The email is not valid.");
}
*/

function validateInput(emailSelector, passwordSelector) {
	// Get input values
	const emailInputs = document.querySelectorAll(emailSelector);
	const passwordInputs = document.querySelectorAll(passwordSelector);

	// Assuming these are global variables declared outside the function
	let emailInput;
	let passwordInput;

	// Check if email or password is empty
	if (emailInputs.length === 0 || passwordInputs.length === 0) {
		alert("Email or password input not found.");
		return false; // Return false to indicate validation failure
	}

	// Assuming you want to retrieve the value of the first matched element
	emailInput = emailInputs[0].value.trim();
	passwordInput = passwordInputs[0].value.trim();

	if (emailInput === "" && passwordInput === "") {
		alert("Email and password are empty.");
		return false; // Return false to indicate validation failure
	} else if (emailInput === "") {
		alert("Email is empty.");
		return false; // Return false to indicate validation failure
	} else if (passwordInput === "") {
		alert("Password is empty.");
		return false; // Return false to indicate validation failure
	}

	// Sanitize inputs
	const sanitizedEmail = sanitizeInput(emailInput);
	const sanitizedPassword = sanitizeInput(passwordInput);
	console.log("Sanitized Email:", sanitizedEmail);
	console.log("Sanitized Password:", sanitizedPassword);

	// Validate email
	if (!isValidEmail(sanitizedEmail)) {
		alert("Invalid email address.");
		return false;
	}

	// Add your code for sending the data to the server here
	return true;
}
/* Usage:
const isValid = validateInput("#email", ".password");
// Proceed with form submission if validation is successful
if (isValid) {
    // Add your code here to handle the form submission
    console.log("Email and password valid!");
} else {
    alert("Input is invalid");
}
*/

var $logs = [];
// Function to save console logs
function customLog() {
	var message = Array.prototype.join.call(arguments, " ");
	menulogs.push(message);
	$logs.push(message);
}
/* Usage:
customLog("Log message as usal console.log");
All logs is stored in $logs, do whatever you want with it, save export.
*/

// Set a custom cursor on your mouse
function mouse(
	xOffset,
	yOffset,
	imageUrl,
	id = "customMouseImage",
	align = "default",
	zIndex = 99999
) {
	const image = new Image();
	image.src = imageUrl;
	image.style.position = "absolute";
	image.style.pointerEvents = "none";
	image.style.zIndex = zIndex;
	image.id = id;

	document.body.appendChild(image);

	document.addEventListener("mousemove", (event) => {
		const mouseX = event.pageX;
		const mouseY = event.pageY;

		let imageX = mouseX + xOffset;
		let imageY = mouseY + yOffset;

		if (align === "center") {
			const computedStyle = getComputedStyle(image);
			const imageWidth = parseFloat(computedStyle.width);
			const imageHeight = parseFloat(computedStyle.height);

			imageX -= imageWidth / 2;
			imageY -= imageHeight / 2;
		}

		image.style.left = `${imageX}px`;
		image.style.top = `${imageY}px`;
	});
}
/* Usage:
mouse(0, 0, "path/to/image.png", "mouse", "center", 999);
*/
