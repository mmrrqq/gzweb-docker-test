#!/bin/bash
source /opt/ros/humble/setup.bash
source /sim/colcon_ws/install/setup.bash

ros2 launch ros_gz_example_bringup diff_drive_headless.launch.py
