import React from 'react';
import * as DB from '../../api/firebase';
import Item from './Item';
import Login from './Login';
import Logout from './Logout';

class ListContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            list: [],
            userProfile: null
        };
        this.addPeople = this.addPeople.bind(this);
        this.getValues = this.getValues.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.auth = this.auth.bind(this);
        this.logout = this.logout.bind(this);
        this.addMeal = this.addMeal.bind(this);
    }

    componentWillMount() {
        DB.loggedUser(user => {
            let profile = Object.assign(
                {},
                {
                    displayName: user.displayName,
                    photoUrl: user.photoURL
                }
            );
            if (user !== null) {
                this.setState({
                    userProfile: profile
                });
            }
            this.setState({
                userProfile: profile
            });
        });
        DB.getData().then(snapshot => {
            this.getValues(snapshot);
        });
    }

    componentDidMount() {
        DB.subscribeToUpdates(this.getValues);
    }

    componentWillUnmount() {
        DB.unsubscribeFromUpdates();
    }

    getValues(snapshot) {
        let objList = snapshot.val();
        let newList = [];
        Object.keys(objList).map(key => {
            newList.push(
                Object.assign(
                    {},
                    objList[key],
                    {
                        id: key
                    }
                )
            )
        });
        this.setState({list: newList});
    }

    addPeople() {
        let newList = [].concat(this.state.list);
        let obj = {
            name: this.refs.nameInput.value,
            age: Math.floor(Math.random() * 100 + 1)
        };
        newList.push(obj);
        this.setState({
            list: newList
        }, () => {
            DB.addItem(obj);
        });
    }

    deleteItem(item) {
        DB.deleteItem(item);
        let newList = this.state.list.filter(listItem => listItem.id !== item.id);
        this.setState({
            list: newList
        });
    }

    addMeal() {
        DB.addMeal();
    }

    auth() {
        DB.authPromise().then(data => {
            var profile = Object.assign(
                {},
                {
                    displayName: data.user.displayName,
                    photoUrl: data.user.photoURL,
                    uid: data.user.uid
                }
            );
            this.setState({
                userProfile: profile
            });
        }).catch(err => {
            console.log(err)
        });
    }

    logout() {
        DB.logout().then(we => {
            this.setState({
                userProfile: null
            });
        });
    }

    render() {
        let authComp = this.state.userProfile ?
            <Logout name={this.state.userProfile.displayName}
                    photoUrl={this.state.userProfile.photoUrl}
                    uid={this.state.userProfile.uid}
                    logout={this.logout}/> :
            <Login auth={this.auth}/>;
        let renderedList = this.state.list && this.state.list.map((item, index) => {
                return (
                    <Item key={index} item={item} delete={this.deleteItem}/>
                );
            });
        return (
            <div>
                {authComp}
                <input type="text" placeholder="Add ppl here" ref="nameInput"/>
                <button type="button" onClick={this.addPeople}>Add</button>
                <button type="button" onClick={this.addMeal}>Add Meal</button>
                <ul>
                    {renderedList}
                </ul>
            </div>
        )
    }
}

export default ListContainer;