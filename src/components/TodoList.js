import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Item from './TodoItem'


export default class TodaList extends React.Component {
    render() {
        return <section>
            <h2> Todo list </h2>
            <Item />
        </section>
    }
}