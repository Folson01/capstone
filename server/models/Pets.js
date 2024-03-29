import mongoose from "mongoose";

const petsSchema = new mongoose.Schema({
  PetName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  Email: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    validate: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
  },
  msg: {
    type: String,
    required: true
  },
  Approachable: [String],
  order: { type: mongoose.Schema.Types.ObjectId, ref: "lostPet" }
});

const Pets = mongoose.model("Pets", petsSchema);

export default Pets;
