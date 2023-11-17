from ultralytics import YOLO

# Load a model
model = YOLO('yolov8n.pt')  # load a pretrained model (recommended for training)

if __name__ == '__main__':
    model.train(data='data.yaml', epochs=40, batch= 16,  imgsz=416, device=0, augment= False, mosaic= True,
                translate=0.0, scale=0.0, shear=0.0, perspective=0.0, flipud=0.0, fliplr=0.0)