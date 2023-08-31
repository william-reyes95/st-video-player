import streamlit as st
from st_video_player import st_video_player

def read_mp4_as_bytes(file_path):
    with open(file_path, "rb") as file:
        mp4_bytes = file.read()
    return mp4_bytes

mp4_file_path = "./response.mp4"
mp4_bytes = read_mp4_as_bytes(mp4_file_path)

video_form = st.container()    
video, data = video_form.columns([3, 1])
with video:
    st_video_player(videoBytes=mp4_bytes, height=300)
