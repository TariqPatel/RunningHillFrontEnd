import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
}

export default function ActivityList({activities, selectActivity}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as="a">{activity.sentence}</Item.Header>
                            <Item.Meta>{activity.sentence}</Item.Meta>
                            <Item.Description>
                                {activity.sentence}
                                {activity.sentence}, {activity.sentence}
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated="right" content="View" color="blue" />
                                <Label basic content={activity.sentence} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}