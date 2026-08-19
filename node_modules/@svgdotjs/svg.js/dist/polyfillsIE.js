(function() {
	//#region node_modules/.pnpm/@target+custom-event-polyfill@https+++codeload.github.com+Adobe-Marketing-Cloud+custom-_48f693ca943d25dc64a16762b77ecc00/node_modules/@target/custom-event-polyfill/src/index.js6
	function CustomEventPolyfill() {
		(function(undefined) {
			if (!function(global) {
				if (!("Event" in global)) return false;
				if (typeof global.Event === "function") return true;
				try {
					new Event("click");
					return true;
				} catch (e) {
					return false;
				}
			}(this)) (function() {
				var unlistenableWindowEvents = {
					click: 1,
					dblclick: 1,
					keyup: 1,
					keypress: 1,
					keydown: 1,
					mousedown: 1,
					mouseup: 1,
					mousemove: 1,
					mouseover: 1,
					mouseenter: 1,
					mouseleave: 1,
					mouseout: 1,
					storage: 1,
					storagecommit: 1,
					textinput: 1
				};
				function indexOf(array, element) {
					var index = -1, length = array.length;
					while (++index < length) if (index in array && array[index] === element) return index;
					return -1;
				}
				var existingProto = window.Event && window.Event.prototype || null;
				window.Event = Window.prototype.Event = function Event(type, eventInitDict) {
					if (!type) throw new Error("Not enough arguments");
					if ("createEvent" in document) {
						var event = document.createEvent("Event");
						var bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
						var cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;
						event.initEvent(type, bubbles, cancelable);
						return event;
					}
					var event = document.createEventObject();
					event.type = type;
					event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
					event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;
					return event;
				};
				if (existingProto) Object.defineProperty(window.Event, "prototype", {
					configurable: false,
					enumerable: false,
					writable: true,
					value: existingProto
				});
				if (!("createEvent" in document)) {
					window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
						var element = this, type = arguments[0], listener = arguments[1];
						if (element === window && type in unlistenableWindowEvents) throw new Error("In IE8 the event: " + type + " is not available on the window object.");
						if (!element._events) element._events = {};
						if (!element._events[type]) {
							element._events[type] = function(event) {
								var list = element._events[event.type].list, events = list.slice(), index = -1, length = events.length, eventElement;
								event.preventDefault = function preventDefault() {
									if (event.cancelable !== false) event.returnValue = false;
								};
								event.stopPropagation = function stopPropagation() {
									event.cancelBubble = true;
								};
								event.stopImmediatePropagation = function stopImmediatePropagation() {
									event.cancelBubble = true;
									event.cancelImmediate = true;
								};
								event.currentTarget = element;
								event.relatedTarget = event.fromElement || null;
								event.target = event.target || event.srcElement || element;
								event.timeStamp = (/* @__PURE__ */ new Date()).getTime();
								if (event.clientX) {
									event.pageX = event.clientX + document.documentElement.scrollLeft;
									event.pageY = event.clientY + document.documentElement.scrollTop;
								}
								while (++index < length && !event.cancelImmediate) if (index in events) {
									eventElement = events[index];
									if (indexOf(list, eventElement) !== -1 && typeof eventElement === "function") eventElement.call(element, event);
								}
							};
							element._events[type].list = [];
							if (element.attachEvent) element.attachEvent("on" + type, element._events[type]);
						}
						element._events[type].list.push(listener);
					};
					window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
						var element = this, type = arguments[0], listener = arguments[1], index;
						if (element._events && element._events[type] && element._events[type].list) {
							index = indexOf(element._events[type].list, listener);
							if (index !== -1) {
								element._events[type].list.splice(index, 1);
								if (!element._events[type].list.length) {
									if (element.detachEvent) element.detachEvent("on" + type, element._events[type]);
									delete element._events[type];
								}
							}
						}
					};
					window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
						if (!arguments.length) throw new Error("Not enough arguments");
						if (!event || typeof event.type !== "string") throw new Error("DOM Events Exception 0");
						var element = this, type = event.type;
						try {
							if (!event.bubbles) {
								event.cancelBubble = true;
								var cancelBubbleEvent = function(event) {
									event.cancelBubble = true;
									(element || window).detachEvent("on" + type, cancelBubbleEvent);
								};
								this.attachEvent("on" + type, cancelBubbleEvent);
							}
							this.fireEvent("on" + type, event);
						} catch (error) {
							event.target = element;
							do {
								event.currentTarget = element;
								if ("_events" in element && typeof element._events[type] === "function") element._events[type].call(element, event);
								if (typeof element["on" + type] === "function") element["on" + type].call(element, event);
								element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
							} while (element && !event.cancelBubble);
						}
						return true;
					};
					document.attachEvent("onreadystatechange", function() {
						if (document.readyState === "complete") document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: true }));
					});
				}
			})();
			if (!("CustomEvent" in this && (typeof this.CustomEvent === "function" || this.CustomEvent.toString().indexOf("CustomEventConstructor") > -1))) {
				this.CustomEvent = function CustomEvent(type, eventInitDict) {
					if (!type) throw Error("TypeError: Failed to construct \"CustomEvent\": An event name must be provided.");
					var event;
					eventInitDict = eventInitDict || {
						bubbles: false,
						cancelable: false,
						detail: null
					};
					if ("createEvent" in document) try {
						event = document.createEvent("CustomEvent");
						event.initCustomEvent(type, eventInitDict.bubbles, eventInitDict.cancelable, eventInitDict.detail);
					} catch (error) {
						event = document.createEvent("Event");
						event.initEvent(type, eventInitDict.bubbles, eventInitDict.cancelable);
						event.detail = eventInitDict.detail;
					}
					else {
						event = new Event(type, eventInitDict);
						event.detail = eventInitDict && eventInitDict.detail || null;
					}
					return event;
				};
				CustomEvent.prototype = Event.prototype;
			}
		}).call("object" === typeof window && window || "object" === typeof self && self || "object" === typeof global && global || {});
	}
	//#endregion
	//#region src/utils/utils.js
	function filter(array, block) {
		let i;
		const il = array.length;
		const result = [];
		for (i = 0; i < il; i++) if (block(array[i])) result.push(array[i]);
		return result;
	}
	//#endregion
	//#region src/polyfills/children.js
	function children(node) {
		return filter(node.childNodes, function(child) {
			return child.nodeType === 1;
		});
	}
	//#endregion
	//#region src/polyfills/innerHTML.js
	function setOuterHTML(node, markupText) {
		const parent = node.parentNode;
		if (!parent) return;
		try {
			const dXML = new DOMParser();
			dXML.async = false;
			const sXML = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>" + markupText + "</svg>";
			const svgDoc = dXML.parseFromString(sXML, "text/xml");
			const parseError = svgDoc.parseError;
			if (parseError && parseError.errorCode !== 0 || svgDoc.getElementsByTagName("parsererror").length) throw new Error();
			const fragment = node.ownerDocument.createDocumentFragment();
			let childNode = svgDoc.documentElement.firstChild;
			while (childNode) {
				fragment.appendChild(node.ownerDocument.importNode(childNode, true));
				childNode = childNode.nextSibling;
			}
			parent.replaceChild(fragment, node);
		} catch (e) {
			throw new Error("Can not set outerHTML on node");
		}
	}
	function serializeXML(node) {
		return new XMLSerializer().serializeToString(node);
	}
	(function() {
		try {
			if (SVGElement.prototype.innerHTML) return;
		} catch (e) {
			return;
		}
		Object.defineProperty(SVGElement.prototype, "innerHTML", {
			get: function() {
				const output = [];
				let childNode = this.firstChild;
				while (childNode) {
					output.push(serializeXML(childNode));
					childNode = childNode.nextSibling;
				}
				return output.join("");
			},
			set: function(markupText) {
				while (this.firstChild) this.removeChild(this.firstChild);
				try {
					const dXML = new DOMParser();
					dXML.async = false;
					const sXML = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>" + markupText + "</svg>";
					let childNode = dXML.parseFromString(sXML, "text/xml").documentElement.firstChild;
					while (childNode) {
						this.appendChild(this.ownerDocument.importNode(childNode, true));
						childNode = childNode.nextSibling;
					}
				} catch (e) {
					throw new Error("Can not set innerHTML on node");
				}
			}
		});
		Object.defineProperty(SVGElement.prototype, "outerHTML", {
			get: function() {
				return serializeXML(this);
			},
			set: function(markupText) {
				setOuterHTML(this, markupText);
			}
		});
	})();
	//#endregion
	//#region .config/polyfillListIE.js
	CustomEventPolyfill();
	try {
		if (!SVGElement.prototype.children) Object.defineProperty(SVGElement.prototype, "children", { get: function() {
			return children(this);
		} });
	} catch (e) {}
	try {
		delete Object.getPrototypeOf("test");
	} catch (e) {
		var old = Object.getPrototypeOf;
		Object.getPrototypeOf = function(o) {
			if (typeof o !== "object") o = new Object(o);
			return old.call(this, o);
		};
	}
	//#endregion
})();
