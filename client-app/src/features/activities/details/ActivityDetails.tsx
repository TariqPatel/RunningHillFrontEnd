import React from "react";
import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm}: Props) {
    return (
    <Card fluid>
        <Image src={`/assets/categoryImages/${activity.sentence}.jpg`}/>
        <CardContent>
            <CardHeader>{activity.sentence}</CardHeader>
            <CardMeta>
                <span>{activity.sentence}</span>
            </CardMeta>
            <CardDescription>
                {activity.sentence} 
            </CardDescription>
        </CardContent>
        <CardContent extra>
            <Button.Group widths="2">
                <Button onClick={() => openForm(activity.id)} basic color="blue" content="edit"/>
                <Button onClick={cancelSelectActivity} basic color="grey" content="cancel"/>
            </Button.Group>
        </CardContent>
    </Card>
    )
}