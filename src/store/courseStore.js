import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";

const CHANGE_EVENT = "change";

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

const store = new CourseStore();

dispatcher.register((action) => {
  switch (action) {
  }
});

export default store;
