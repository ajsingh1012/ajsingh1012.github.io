import React from 'react';
import $ from 'jquery';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 250,
    margin: '10px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  listStyle: {
    listStyle: 'none',
  },
  listStyleType: {
    listStyleType: 'none',
    padding: '0px',
    margin: '0px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gridGap: 3,
  },
});

function getInfo() {
    var arr = [];
    var name, content, url;

    $.ajax({
        url: "https://api.github.com/users/ajsingh1012/repos",
        async: false,
        jsonp: true,
        method: "GET",
        dataType: "json",
        success: function(res) {
            console.log(res);
            res.forEach((element) => {        
                if(element.has_pages) {  
                    var entry;        
                    name = element.name;
                    content = element.description;
                    url = document.URL + element.name;
                    entry = {name: name, desc: content, link: url};
                    arr.push(entry);
                }
            });
        }
    });

    return arr;
}

export default function CardInfo() {
    const classes = useStyles();
    const lib = getInfo();

    return (
        <ul className={classes.listStyleType}>
            {lib.map((e) =>
                <li className={classes.listStyle}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {e.name}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {e.desc}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={e.link}>Learn More</Button>
                        </CardActions>
                    </Card>
                </li>
            )}
        </ul>
    );
}