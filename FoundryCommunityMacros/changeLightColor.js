// Convert certain color lights to torch

(async () => {
        let foundLights = [];
        let markingColor = "#ffff00"
        let newColor = "#dd0000"
        let scene = game.scenes.active;
    
        canvas.lighting.placeables.forEach(l => { if (l.data.config.color === markingColor && l.scene === scene) foundLights.push(l.id) })
    
        const updates = []
        foundLights.forEach(id => {
            updates.push({ _id: id, 
                config: {
                    color: newColor,
                    dim: 16,
                    bright: 8,
                    animation: {              
                            type: 'torch',
                            speed: 1,
                            intensity: 3,
                            reverse: false
                    }   
                }
            });
        })
    
        await scene.updateEmbeddedDocuments("AmbientLight", updates);
    
        console.log(foundLights)
})()
    

// Convert all lights to torch not touching the color

(async () => {
        let foundLights = [];
        let scene = game.scenes.active;
    
        canvas.lighting.placeables.forEach(l => { if (l.scene === scene) foundLights.push(l.id) })
    
        const updates = []
        foundLights.forEach(id => {
            updates.push({ _id: id,
                config: {
                    dim: 16,
                    bright: 8,
                    animation: {              
                            type: 'pulse',
                            speed: 1,
                            intensity: 3,
                            reverse: false
                    }   
                }
            });
        })
    
        await scene.updateEmbeddedDocuments("AmbientLight", updates);
    
        console.log(foundLights)
})()
