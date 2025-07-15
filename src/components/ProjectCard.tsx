"use client";
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/ProjectCard.module.css";
import Slider from "react-slick";
import ArrowSlideBack from "./ArrowSlideBack";
import ArrowSlideNext from "./ArrowSlideNext";
import Image from "next/image";

interface CardProps {
  title: string;
  imgSrc: string;
  imgSlide1: string;
  imgSlide2: string;
  gitHubUrl: string;
  description: string;
  chips: string[];
  liveDemo: string;
}

const ProjectCard: React.FC<CardProps> = ({
  title,
  imgSrc,
  imgSlide1,
  imgSlide2,
  gitHubUrl,
  description,
  chips,
  liveDemo,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
  if (open && sliderRef.current) {
    const currentSlider = sliderRef.current; 
    setTimeout(() => {
      if (currentSlider) { 
        currentSlider.slickGoTo(0);
      }
    }, 100);
  }
}, [open]);

  const settings = {
    dots: true,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => <div className={styles.li_slider}></div>,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowSlideBack />,
    nextArrow: <ArrowSlideNext />,
  };

  console.log(liveDemo);

  return (
    <>
      <Paper elevation={3} className={styles.cardBox} onClick={handleOpen}>
        <div className={styles.imgBox}>
          <Image
            src={imgSrc}
            alt="project screenshot"
            width={500}
            height={144}
          />
        </div>

        <Typography gutterBottom variant="h6" component="div">
          <span className="standard_header">{title}</span>
        </Typography>
      </Paper>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <div className="slider-container">
            <Slider {...settings} ref={sliderRef}>
              <div>
                <Image
                  src={imgSrc}
                  alt=""
                  className={styles.sliderImage}
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <Image
                  src={imgSlide1}
                  alt=""
                  className={styles.sliderImage}
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <Image
                  src={imgSlide2}
                  alt=""
                  className={styles.sliderImage}
                  width={500}
                  height={400}
                />
              </div>
            </Slider>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <DialogContentText>
            <p>{description}</p>
          </DialogContentText>
          <Stack
            direction="row"
            useFlexGap
            sx={{ flexWrap: "wrap" }}
            spacing={2}
            mt={1}
          >
            {chips.map((value, index) => (
              <Chip sx={{ background: "#f9f5e9" }} key={index} label={value} />
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button size="large" href={gitHubUrl} sx={{ color: "#caae79" }}>
            GitHub
          </Button>
          {/* <Button size="large" href={liveDemo} sx={{color: '#caae79'}}>Live Demo</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProjectCard;
