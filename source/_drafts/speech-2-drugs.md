

I fine-tuned a closed source STT model which is 73% better at transcribing common medical words like `vyvanse` for Lyrebird. 

The model is hooked up to the live web app with automated scripts to retrain on-the-fly, absorbing 1000's of medical consults worth of data per day. 

It's pretty cool. 

https://huggingface.co/jusstinleee/speech2drug-v4

encoder decoder transformer
![[whisper-schematics.svg]]