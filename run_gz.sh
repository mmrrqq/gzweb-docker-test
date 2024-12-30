#!/bin/bash
source /opt/ros/humble/setup.bash
source /sim/colcon_ws/install/setup.bash

ros2 launch ur_simulation_gz ur_sim_control.launch.py gazebo_gui:=false launch_rviz:=false world_file:=default.sdf &> /dev/null & disown;
sleep 3
ros2 launch ur_robot_driver test_joint_trajectory_controller.launch.py
