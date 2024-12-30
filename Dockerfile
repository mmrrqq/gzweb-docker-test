FROM osrf/ros:humble-desktop

WORKDIR /sim
RUN apt update && apt install -y lsb-release curl gnupg
RUN curl https://packages.osrfoundation.org/gazebo.gpg --output /usr/share/keyrings/pkgs-osrf-archive-keyring.gpg
RUN echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/pkgs-osrf-archive-keyring.gpg] http://packages.osrfoundation.org/gazebo/ubuntu-stable $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/gazebo-stable.list > /dev/null
RUN apt update && apt install -y ignition-fortress ros-humble-ros-gz
# libgz-cmake3-dev libgz-plugin2-dev libgz-common5-dev libgz-sim7-dev
COPY run_gz.sh /sim
COPY ./colcon_ws/ /sim/colcon_ws/

RUN /bin/bash -c "source /opt/ros/humble/setup.bash && cd /sim/colcon_ws && rosdep update && rosdep install --from-paths src --ignore-src -r -i -y --rosdistro humble"
RUN /bin/bash -c "source /opt/ros/humble/setup.bash && cd /sim/colcon_ws && colcon build --cmake-args -DBUILD_TESTING=ON"

EXPOSE 9002

CMD ["./run_gz.sh"]
