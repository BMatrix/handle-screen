import { Meteor } from 'meteor/meteor';
import { Collections } from './Collections';


Meteor.methods({
    'management.collections.clear'() {
        Collections.remove({});
    },
});