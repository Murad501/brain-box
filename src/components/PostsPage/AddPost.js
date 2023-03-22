import { MdKeyboardArrowDown } from "react-icons/md";
import { AiFillTags } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import {
  Button,
  CssVarsProvider,
  extendTheme,
  IconButton,
  Option,
  Select,
  Textarea,
} from "@mui/joy";
import { useState } from "react";

const {
  FormControl,
  Grid,
  Avatar,
  Input,
  Card,
  Typography,
  Box,
} = require("@mui/material");
import { GrAttachment } from "react-icons/gr";
import { Check } from "@mui/icons-material";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";

function AddPost({refetch}) {
  const [isPosting, setIsPosting] = useState(false);
  const [fileInputText, setFileInputText] = useState("");
  const [tagValue, setTagValue] = useState("");

  const [tags, setTags] = useState([]);
  const [postText, setPostText] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [tagText, setTagText] = useState(false);
  const imgbbApi = process.env.NEXT_PUBLIC_Imgbb_API;
  const { data } = useSession();
  const user = data?.user;

  const handleFileInputChange = (e) => {
    setImageFile(e.target?.files[0]);
    setFileInputText(e.target?.files[0]?.name);
  };

  const theme = extendTheme({
    components: {
      JoySelect: {
        defaultProps: {
          indicator: <MdKeyboardArrowDown></MdKeyboardArrowDown>,
        },
      },
    },
  });

  const handleAddTag = (e) => {
    setTags([...tags, tagValue]);
    setTagValue("");
    setTagText(false);
  };
  const handleRemoveTag = (removeTag) => {
    const currentTags = tags.filter((tag) => tag !== removeTag);
    setTags([...currentTags]);
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    const imageData = new FormData();
    imageData.set("key", imgbbApi);
    imageData.append("image", imageFile);
    axios
      .post(`https://api.imgbb.com/1/upload`, imageData)
      .then(async (res) => {
        if (res.data.data.url) {
          const imgUrl = res.data.data.url;
          try {
            const response = await axios.post("/api/researches", {
              imgUrl,
              tags,
              postText,
              isPrivate,
              author: {
                name: user?.name,
                email: user?.email,
                image: user.image,
              },
              actions: {
                love: [],
                comment: [],
                share: 0
              },
              postTime: new Date(),
            });
            if (response.data.insertedId) {
              refetch()
              toast.success("successfully posted");
              setPostText("");
              setImageFile(null);
              setTags([]);
              setFileInputText("");
              e.target.reset();
              
            }
          } catch (err) {
            console.log(err.message);
          }
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 800, mx: "auto", my: 2, py: 2, px: 1 }}
    >
      <Grid
        container
        spacing={1}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Grid item xs={2} sm={1}>
          <Avatar
            alt="Cindy Baker"
            src={user?.image}
          />
        </Grid>
        <Grid item xs={10} sm={11}>
          {isPosting ? (
            <form onSubmit={handleAddPost}>
              <FormControl sx={{ width: "100%" }}>
                <Textarea
                  onChange={(e) => setPostText(e.target?.value)}
                  variant="plain"
                  minRows={3}
                  placeholder={`What's new, ${user ?user?.name : ''}?`}
                />
              </FormControl>
              <Box
                sx={{
                  py: 1,
                  my: "1px",

                  borderTop: "1px solid lightBlue",
                  borderBottom: "1px solid lightBlue",
                }}
              >
                {tags.length ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: 3,
                      my: 1,
                    }}
                  >
                    {tags.map((tag, idx) => {
                      return (
                        <Button
                          key={idx}
                          size="sm"
                          variant="soft"
                          sx={{ position: "relative", px: 3, borderRadius: 0 }}
                        >
                          {tag}{" "}
                          <RxCrossCircled
                            onClick={() => handleRemoveTag(tag)}
                            style={{
                              position: "absolute",
                              top: "-6px",
                              right: "-6px",
                              borderRadius: "50%",
                              color: "red",
                              fontSize: "15px",
                            }}
                          ></RxCrossCircled>
                        </Button>
                      );
                    })}
                  </Box>
                ) : (
                  ""
                )}
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
                    <AiFillTags></AiFillTags>
                    <FormControl>
                      <Input
                        name="tag"
                        onChange={(e) => {
                          setTagValue(e.target?.value);
                          setTagText(true);
                        }}
                        sx={{ borderRadius: 12, display: "block", ml: 1 }}
                        placeholder="Add a tag..."
                        disableUnderline={true}
                      />
                    </FormControl>
                  </Box>
                  {tagValue && (
                    <IconButton
                      onClick={(e) => handleAddTag(e)}
                      variant="solid"
                      sx={{
                        height: 30,
                        width: 30,
                        borderRadius: "50%",
                      }}
                    >
                      <Check sx={{ width: 20, height: 20 }} />
                    </IconButton>
                  )}
                </Box>
                <>
                  <input
                    type="file"
                    id="file-input"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="file-input"
                    style={{ display: "block", marginTop: "10px" }}
                  >
                    <Button
                      component="span"
                      variant="plain"
                      sx={{
                        "&.MuiButton-root:hover": { bgcolor: "transparent" },
                        px: 1,
                      }}
                    >
                      <GrAttachment
                        style={{
                          borderRadius: "50%",
                          border: "1px solid lightblue",
                          width: "25px",
                          height: "25px",
                          padding: "5px",
                        }}
                      ></GrAttachment>{" "}
                      <Typography
                        sx={{
                          border: "1px solid lightblue",
                          px: 1,
                          borderRadius: "20px",
                          ml: 1,
                        }}
                      >
                        {fileInputText ? "Attached" : "Attach Media"}
                      </Typography>
                    </Button>
                  </label>
                  <Typography sx={{ color: "gray", ml: 1 }}>
                    {fileInputText}
                  </Typography>
                </>
              </Box>
              <Grid
                container
                item
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 1 }}
              >
                <Grid item>
                  <CssVarsProvider theme={theme}>
                    <FormControl>
                      <Select
                        onChange={(e) =>
                          setIsPrivate(
                            e?.target?.innerText === "Public" ? false : true
                          )
                        }
                        defaultValue="Public"
                        placeholder="Post Type"
                      >
                        <Option value="public">Public</Option>
                        <Option value="private">Private</Option>
                      </Select>
                    </FormControl>
                  </CssVarsProvider>
                </Grid>
                <Grid item>
                  <Button
                    color="danger"
                    onClick={() => setIsPosting(false)}
                    size="sm"
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                  <FormControl>
                    <Button
                      type="submit"
                      color="primary"
                      size="sm"
                      variant="outlined"
                      sx={{ ml: 1 }}
                    >
                      Post Update
                    </Button>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          ) : (
            <FormControl sx={{ width: "100%" }}>
              <Input
                onFocus={() => setIsPosting(true)}
                sx={{ borderRadius: 12, "& fieldset": { border: "none" } }}
                placeholder={`What's new, ${user ?user?.name : ''}?`}
                disableUnderline={true}
                variant="standard"
              />
            </FormControl>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}

export default AddPost;
